import { useState, useMemo } from "react";
import { hsk1Words, hsk1WordsType } from "../lib/data";
import { getRandomObjects } from "../lib/helpers";
import Flashcard from "../components/Flashcard";

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

  const restartGame = () => {
    setRestart(!restart);
    setCurrentLevel(0);
    setScore(0);
    setTries(0);
  };

  console.log(currentLevel, words);
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] w-full pt-20">
      <div className="mb-10">
        Score: {score}/{tries}
        Level: {currentLevel + 1}/{maxLevels}
      </div>

      {currentLevel !== maxLevels - 1 &&
        words.map(
          (word, i) =>
            currentLevel == i && (
              <Flashcard
                word={word}
                options={words}
                key={i}
                currentLevel={currentLevel}
                setScore={setScore}
                setCurrentLevel={setCurrentLevel}
                setTries={setTries}
              />
            )
        )}
      {currentLevel === maxLevels - 1 && (
        <button
          className="border rounded-lg py-2  border-stone-950 hover:bg-green-300 hover:border-green-300 "
          onClick={restartGame}
        >
          Restart
        </button>
      )}
    </div>
  );
}
