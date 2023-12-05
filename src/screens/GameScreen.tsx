import { useState, useMemo } from "react";
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

  const words: hsk1WordsType = useMemo(
    () =>
      !showHardWords
        ? getArrayObjects(hsk1Words, vocabularyPart, undefined, vocabularySize)
        : hardWords,
    [restart, vocabularyPart, vocabularySize, showHardWords]
  );

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
    setVocabularySize(hardWords.length);
  };

  return (
    <div className="flex flex-col  justify-center items-center min-h-[100vh] w-full pt-20">
      <div className="mb-10 pt-1 flex relative justify-between w-1/3 border-t">
        <MainMenuBtn
          classNames="absolute bottom-10 right-50%"
          onClick={() => setShowGameScreen(false)}
        >
          Назад
        </MainMenuBtn>
        <MainMenuBtn
          classNames="absolute bottom-10 right-0"
          onClick={handleShowHardWords}
        >
          Сложные слова: {hardWords.length}
        </MainMenuBtn>
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
