import { useState, useMemo } from "react";
import { hsk1Words, hsk1WordsType } from "../lib/data";
import { getArrayObjects } from "../lib/helpers";
import Flashcard from "../components/Flashcard";
import Results from "../components/Results";
import MainMenuBtn from "../components/MainMenuBtn";

type Props = {
  setShowGameScreen: React.Dispatch<React.SetStateAction<boolean>>;
  vocabularyPart: string | number;
  mode: string;
};

const MAX_LEVELS = 10;

export default function GameScreen({
  setShowGameScreen,
  mode,
  vocabularyPart,
}: Props) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [restart, setRestart] = useState(false);

  const words: hsk1WordsType = useMemo(
    () => getArrayObjects(hsk1Words, vocabularyPart),
    [restart, vocabularyPart]
  );

  const restartGame = (wholeRestart = false) => {
    if (wholeRestart) setRestart(!restart);
    setCurrentLevel(0);
    setScore(0);
    setTries(0);
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
        <span>
          Счет: {score}/{tries}
        </span>
        <span>
          Часть словаря:{" "}
          {typeof vocabularyPart === "number"
            ? vocabularyPart + 1
            : "Случайная"}
        </span>
        <span>
          {currentLevel === MAX_LEVELS ? (
            <>
              Слово: {currentLevel}/{MAX_LEVELS}
            </>
          ) : (
            <>
              Слово: {currentLevel + 1}/{MAX_LEVELS}
            </>
          )}
        </span>
      </div>

      {currentLevel !== MAX_LEVELS &&
        words.map(
          (word, i) =>
            currentLevel == i && (
              <Flashcard
                word={word}
                options={words}
                key={i}
                currentLevel={currentLevel}
                maxLevels={MAX_LEVELS}
                setScore={setScore}
                setCurrentLevel={setCurrentLevel}
                setTries={setTries}
                mode={mode}
              />
            )
        )}
      {currentLevel === MAX_LEVELS && (
        <Results score={score} maxScore={tries} restartGame={restartGame} />
      )}
    </div>
  );
}
