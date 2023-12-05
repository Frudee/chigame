import { useState, ChangeEvent } from "react";
import { hsk1WordType } from "../lib/data";
import MainMenuBtn from "./MainMenuBtn";

type Props = {
  word: hsk1WordType;
  handleAnswer: (guessWord: string, correctWord: string, mode?: string) => void;
};

export default function TypeChinese({ word, handleAnswer }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmitAnswer();
    }
  };

  const handleSubmitAnswer = () => {
    handleAnswer(inputValue, word.Chinese, "typeChinese");
    setInputValue("");
  };

  return (
    <div className="w-full min-h-[140px] flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-2">
      <input
        className="border p-2 rounded-md w-full focus:border-orange-300 focus:outline-0"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите иероглиф"
        autoFocus
      />
      <MainMenuBtn onClick={handleSubmitAnswer}>Проверить</MainMenuBtn>
    </div>
  );
}
