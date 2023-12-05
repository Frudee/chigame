import { useState, useMemo } from "react";
import { hsk1WordType } from "../lib/data";
import { insertAtRandomPosition } from "../lib/helpers";
import TypeChinese from "./TypeChinese";
import OptionsList from "./OptionsList";
import AnswerFeedback from "./AnswerFeedback";

type Props = {
  word: hsk1WordType;
  options: hsk1WordType[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
  setTries: React.Dispatch<React.SetStateAction<number>>;
  setHardWords: React.Dispatch<React.SetStateAction<hsk1WordType[]>>;
  showHardWords: boolean;
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
  setHardWords,
  showHardWords,
  currentLevel,
  maxLevels,
  mode,
}: Props) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [error, setError] = useState(false);
  const [showPinyin, setShowPinyin] = useState(false);

  const currentOptions = useMemo(() => {
    const randomOptions = options
      .filter((option) => option !== word)
      .sort(() => Math.random() - 0.5);
    insertAtRandomPosition(randomOptions, word);
    return randomOptions;
  }, [word, options]);

  const handleAnswer = (guessWord: string, correctWord: string) => {
    if (!showPinyin) setTries((prevTries) => prevTries + 1);
    if (guessWord === correctWord) {
      if (!showPinyin) setScore((prevScore) => prevScore + 1);
      setIsCorrectAnswer(true);
    } else {
      if (!showHardWords)
        setHardWords((prevHardWords) => [...prevHardWords, word]);
      setError(true);
    }
  };

  const handleClickShowPinyin = () => {
    if (!showPinyin) setTries((prevTries) => prevTries + 1);
    setShowPinyin(true);
  };

  const handleClickNext = () => {
    setIsCorrectAnswer(false);

    if (currentLevel === maxLevels) return;
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center min-h-[200px]">
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
        <OptionsList
          currentOptions={currentOptions}
          word={word}
          handleAnswer={handleAnswer}
        />
      )}
      {mode === "typeChinese" && !error && !isCorrectAnswer && (
        <TypeChinese handleAnswer={handleAnswer} word={word} />
      )}
      {isCorrectAnswer || error ? (
        <AnswerFeedback
          word={word}
          handleClickNext={handleClickNext}
          isCorrectAnswer={isCorrectAnswer}
        />
      ) : null}
    </div>
  );
}
