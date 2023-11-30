import { useState } from "react";
import { hsk1Words, hsk1WordsType } from "../lib/data";
import { getRandomObjects } from "../lib/helpers";
import Flashcard from "./Flashcard";

export default function GameScreen() {
  const maxLevels = 10;
  const [currentLevel, setCurrentLevel] = useState(0);
  const words: hsk1WordsType = getRandomObjects(hsk1Words, maxLevels);
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      {words.map(
        (word, i) => currentLevel == i && <Flashcard word={word} key={i} />
      )}
      <button
        onClick={() => {
          setCurrentLevel(currentLevel + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
