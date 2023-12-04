import { useState, ChangeEvent } from "react";
import { hsk1WordType } from "../lib/data";

type Props = {
  word: hsk1WordType;
  handleAnswer: (guessWord: string, correctWord: string, mode?: string) => void;
};

export default function TypeChinese({ word, handleAnswer }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmitAnswer = () => {
    handleAnswer(inputValue, word.Chinese, "typeChinese");
    setInputValue("");
  };

  return (
    <div className="w-full flex justify-center gap-8">
      <input
        className="border"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmitAnswer}>Проверить</button>
    </div>
  );
}
