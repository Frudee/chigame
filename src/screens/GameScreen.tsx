import { useState, useMemo } from "react";
import { hsk1Words, hsk1WordsType } from "../lib/data";
import { getRandomObjects } from "../lib/helpers";
import Flashcard from "../components/Flashcard";
import Results from "../components/Results";

export default function GameScreen() {
  const maxLevels = 10;
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [restart, setRestart] = useState(false);

  const words: hsk1WordsType = useMemo(
    () => getRandomObjects(hsk1Words, maxLevels),
    [restart]
  );

  const restartGame = (wholeRestart = false) => {
    if (wholeRestart) setRestart(!restart);
    setCurrentLevel(0);
    setScore(0);
    setTries(0);
  };

  console.log(currentLevel, words);
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] w-full pt-20">
      <div className="mb-10 flex justify-between w-1/3">
        <span>
          Счет: {score}/{tries}
        </span>
        <span>
          {currentLevel === maxLevels ? (
            <>
              Слово: {currentLevel}/{maxLevels}
            </>
          ) : (
            <>
              Слово: {currentLevel + 1}/{maxLevels}
            </>
          )}
        </span>
      </div>

      {currentLevel !== maxLevels &&
        words.map(
          (word, i) =>
            currentLevel == i && (
              <Flashcard
                word={word}
                options={words}
                key={i}
                currentLevel={currentLevel}
                maxLevels={maxLevels}
                setScore={setScore}
                setCurrentLevel={setCurrentLevel}
                setTries={setTries}
              />
            )
        )}
      {currentLevel === maxLevels && (
        <Results score={score} maxScore={tries} restartGame={restartGame} />
      )}
    </div>
  );
}
