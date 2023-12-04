import { FC, SyntheticEvent, useEffect } from "react";
import { hsk1WordType } from "../lib/data";

interface CorrectAnswerProps {
  word: hsk1WordType;
  isCorrectAnswer: boolean;
  handleClickNext: () => void;
}

const AnswerFeedback: FC<CorrectAnswerProps> = ({
  word,
  handleClickNext,
  isCorrectAnswer,
}) => {
  return (
    <div
      className={`${
        isCorrectAnswer ? "bg-green-200" : "bg-red-200"
      } p-6 flex justify-evenly gap-4 rounded-md items-center w-full`}
    >
      <div className="text-center">
        <h2 className="text-2xl mb-2">
          {isCorrectAnswer ? "Верно" : "Ошибка"}
        </h2>
        <span className="block text-lg">{word.Pinyin}</span>
        <span className="block text-md">{word.Russian}</span>
      </div>
      <button
        className={`${
          isCorrectAnswer
            ? "bg-green-400 hover:bg-green-500"
            : "bg-red-400 hover:bg-red-500"
        } py-1 px-6 rounded-md min-w-[200px]`}
        onClick={handleClickNext}
      >
        Далее
      </button>
    </div>
  );
};

export default AnswerFeedback;