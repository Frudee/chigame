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
      event.preventDefault();
      handleSubmitAnswer();
    }
  };

  const handleSubmitAnswer = () => {
    handleAnswer(inputValue, word.Chinese, "typeChinese");
    setInputValue("");
  };

  return (
    <div className="w-full flex justify-center gap-8">
      <input
        className="border p-2 rounded-md focus:border-orange-300 focus:outline-0"
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
