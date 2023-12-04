import { useState, useMemo } from "react";
import { hsk1WordType } from "../lib/data";
import { getRandomObjects, insertAtRandomPosition } from "../lib/helpers";
import OptionButton from "./OptionButton";
import TypeChinese from "./TypeChinese";

type Props = {
  word: hsk1WordType;
  options: hsk1WordType[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
  setTries: React.Dispatch<React.SetStateAction<number>>;
  currentLevel: number;
  maxLevels: number;
  mode: string;
};

export default function Flashcard({
  word,
  options,
  setScore,
  setCurrentLevel,
  setTries,
  currentLevel,
  maxLevels,
  mode,
}: Props) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [error, setError] = useState(false);
  const [showPinyin, setShowPinyin] = useState(false);

  const currentOptions = useMemo(() => {
    const optionsWithoutWord = options.filter((option) => option !== word);
    const randomOptions = getRandomObjects(optionsWithoutWord, 3, word.Russian);
    insertAtRandomPosition(randomOptions, word);
    return randomOptions;
  }, [word, options]);

  const handleAnswer = (guessWord: string, correctWord: string) => {
    if (!showPinyin) setTries((prevTries) => prevTries + 1);
    if (guessWord === correctWord) {
      if (!showPinyin) setScore((prevScore) => prevScore + 1);
      setIsCorrectAnswer(true);
    } else {
      setError(true);
    }
  };

  const handleClickShowPinyin = () => {
    setTries((prevTries) => prevTries + 1);
    setShowPinyin((prev) => !prev);
  };

  const handleClickNext = () => {
    setIsCorrectAnswer(false);

    if (currentLevel === maxLevels) return;
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <div className="w-1/3 flex flex-col items-center min-h-[200px]">
      <div className="flex flex-col items-center h-56">
        <span className="text-3xl mb-5 block ">{word.Chinese}</span>
        <span className={`text-lg ${showPinyin ? "block" : "hidden"}`}>
          {word.Pinyin}
        </span>
        <button
          className="mt-auto mb-4 hover:font-bold"
          onClick={handleClickShowPinyin}
        >
          👁 Pinyin
        </button>
      </div>
      {!isCorrectAnswer && !error && mode === "translateRus" && (
        <div className="flex flex-col grow w-full items-center ">
          <div className="mb-4 flex w-full grow gap-4">
            <OptionButton
              option={currentOptions[0].Russian}
              onClick={() =>
                handleAnswer(currentOptions[0].Russian, word.Russian)
              }
            />
            <OptionButton
              option={currentOptions[1].Russian}
              onClick={() =>
                handleAnswer(currentOptions[1].Russian, word.Russian)
              }
            />
          </div>
          <div className="mb-4 flex w-full grow gap-4">
            <OptionButton
              option={currentOptions[2].Russian}
              onClick={() =>
                handleAnswer(currentOptions[2].Russian, word.Russian)
              }
            />
            <OptionButton
              option={currentOptions[3].Russian}
              onClick={() =>
                handleAnswer(currentOptions[3].Russian, word.Russian)
              }
            />
          </div>
        </div>
      )}
      {mode === "typeChinese" && !error && !isCorrectAnswer && (
        <TypeChinese handleAnswer={handleAnswer} word={word} />
      )}
      {isCorrectAnswer && (
        <div className="bg-green-200 p-6 flex flex-col items-center w-full">
          <h2>CORRECT</h2>
          <span className="block text-lg">{word.Pinyin}</span>
          {mode === "typeChinese" && (
            <span className="block text-lg">{word.Russian}</span>
          )}
          <button onClick={handleClickNext}>Далее</button>
        </div>
      )}
      {error && (
        <div className="bg-red-200 p-6 flex flex-col items-center w-full">
          <h2>WRONG</h2>
          <span className="block text-lg">
            Правильный ответ: <strong>{word.Russian}</strong>
          </span>
          <span className="block text-lg">{word.Pinyin}</span>
          <button onClick={handleClickNext}>Далее</button>
        </div>
      )}
    </div>
  );
}
