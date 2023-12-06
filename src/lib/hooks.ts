import { useMemo, useState } from "react";
import { hsk1WordsType } from "./data";
import { getArrayObjects } from "./helpers";

export const useWords = (
  hsk1Words: hsk1WordsType,
  vocabularyPart: string | number,
  vocabularySize: number,
  showHardWords: boolean,
  restart: boolean,
  chunkSize: number
) => {
  const [hardWords, setHardWords] = useState([]);

  const words = useMemo(() => {
    if (!showHardWords) {
      setHardWords([]);
      return getArrayObjects(hsk1Words, vocabularyPart, undefined, chunkSize);
    } else {
      return hardWords;
    }
  }, [
    restart,
    vocabularyPart,
    vocabularySize,
    showHardWords,
    hsk1Words,
    chunkSize,
  ]);

  return words;
};
