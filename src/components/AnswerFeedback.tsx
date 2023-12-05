import { FC, useEffect, useRef } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        event.target instanceof Element &&
        !isInputField(event.target)
      ) {
        buttonRef.current?.click();
      }
    };

    const isInputField = (element: Element) => {
      return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`${
        isCorrectAnswer ? "bg-green-200" : "bg-red-200"
      } py-6 px-2 sm:px-6 flex justify-evenly gap-4 rounded-md items-center w-full`}
    >
      <div className="text-center w-full">
        <h2 className="text-2xl mb-2">
          {isCorrectAnswer ? "Верно" : "Ошибка"}
        </h2>
        <span className="block text-lg">{word.Pinyin}</span>
        <span className="block text-md">{word.Russian}</span>
      </div>
      <button
        ref={buttonRef}
        className={`${
          isCorrectAnswer
            ? "bg-green-400 hover:bg-green-500"
            : "bg-red-400 hover:bg-red-500"
        } py-1 px-6 rounded-md w-full sm:min-w-[200px]`}
        onClick={handleClickNext}
      >
        Далее
      </button>
    </div>
  );
};

export default AnswerFeedback;
