import { useState, useMemo, useEffect, useRef } from "react";
import { hsk1Words, hsk1WordsType } from "../lib/data";
import { getArrayObjects } from "../lib/helpers";
import Flashcard from "../components/Flashcard";
import Results from "../components/Results";
import MainMenuBtn from "../components/MainMenuBtn";

type Props = {
  setShowGameScreen: React.Dispatch<React.SetStateAction<boolean>>;
  vocabularyPart: string | number;
  vocabularySize: number;
  setVocabularySize: React.Dispatch<React.SetStateAction<number>>;
  mode: string;
};

export default function GameScreen({
  setShowGameScreen,
  mode,
  vocabularyPart,
  vocabularySize,
  setVocabularySize,
}: Props) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [restart, setRestart] = useState(false);
  const [hardWords, setHardWords] = useState<hsk1WordsType>([]);
  const [showHardWords, setShowHardWords] = useState(false);

  const chunkSize = useRef(vocabularySize);

  const words: hsk1WordsType = useMemo(() => {
    if (!showHardWords) {
      setHardWords([]);
      return getArrayObjects(
        hsk1Words,
        vocabularyPart,
        undefined,
        chunkSize.current
      );
    } else {
      return hardWords;
    }
  }, [restart, vocabularyPart, vocabularySize, showHardWords]);

  const restartGame = (wholeRestart = false) => {
    if (wholeRestart) setRestart(!restart);
    words.sort(() => Math.random() - 0.5);
    setCurrentLevel(0);
    setScore(0);
    setTries(0);
  };

  const handleShowHardWords = () => {
    if (hardWords.length < 1) return;
    restartGame();
    setShowHardWords(!showHardWords);
  };

  useEffect(() => {
    if (showHardWords) setVocabularySize(hardWords.length);
    if (!showHardWords) setVocabularySize(words.length);
  }, [showHardWords, hardWords, words]);

  return (
    <div className="flex flex-col text-sm sm:text-base  justify-center items-center min-h-[100vh] w-full pt-20 px-2">
      <div className="mb-10 flex flex-col justify-between w-full sm:w-1/2 ">
        <div className="flex justify-between w-full pb-2 gap-2">
          <MainMenuBtn classNames="" onClick={() => setShowGameScreen(false)}>
            Назад
          </MainMenuBtn>
          <MainMenuBtn
            classNames={` ${showHardWords ? "border-orange-400" : ""}`}
            onClick={handleShowHardWords}
          >
            Сложные слова: {hardWords.length}
          </MainMenuBtn>
        </div>
        <div className="flex justify-between w-full border-t pt-1">
          <span>
            Счет: {score}/{tries}
          </span>
          <span>
            Часть словаря:{" "}
            {showHardWords
              ? "Сложные слова"
              : typeof vocabularyPart === "number"
              ? vocabularyPart + 1
              : "Случайная"}
          </span>
          <span>
            {currentLevel === vocabularySize ? (
              <>
                Слово: {currentLevel}/{vocabularySize}
              </>
            ) : (
              <>
                Слово: {currentLevel + 1}/{vocabularySize}
              </>
            )}
          </span>
        </div>
      </div>
      {currentLevel !== vocabularySize &&
        words.map(
          (word, i) =>
            currentLevel == i && (
              <Flashcard
                word={word}
                setHardWords={setHardWords}
                showHardWords={showHardWords}
                options={words}
                key={i}
                currentLevel={currentLevel}
                maxLevels={vocabularySize}
                setScore={setScore}
                setCurrentLevel={setCurrentLevel}
                setTries={setTries}
                mode={mode}
              />
            )
        )}
      {currentLevel === vocabularySize && (
        <Results score={score} maxScore={tries} restartGame={restartGame} />
      )}
    </div>
  );
}
