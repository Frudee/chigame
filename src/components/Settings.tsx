import MainMenuBtn from "./MainMenuBtn";
import { ReactNode } from "react";
import { hsk1Words } from "../lib/data";

type Props = {
  setMode: React.Dispatch<React.SetStateAction<string>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setVocabularyPart: React.Dispatch<React.SetStateAction<string | number>>;
  setVocabularySize: React.Dispatch<React.SetStateAction<number>>;
  vocabularySize: number;
};

export default function Settings({
  setMode,
  setShowSettings,
  setVocabularyPart,
  setVocabularySize,
  vocabularySize,
}: Props) {
  const vocabularyParts: ReactNode[] = [];
  const maxValue = hsk1Words.length;
  const chunkSize = maxValue / vocabularySize;

  for (let i = 0; i < chunkSize; i++) {
    vocabularyParts.push(
      <option key={i} value={i}>
        Часть {i + 1}
      </option>
    );
  }

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVocabularySize(Number(event.target.value));
  };

  const handleVocabularyPartChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === "random") {
      setVocabularyPart("random");
      return;
    }
    setVocabularyPart(Number(event.target.value));
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100vh] px-2">
      <h2 className="text-[22px]">Настройки</h2>
      <select
        className="border w-full p-2 rounded-lg hover:cursor-pointer sm:max-w-[300px]"
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="">Режим</option>
        <option value="translateRus">Перевод на русский</option>
        <option value="typeChinese">Ввод иероглифов</option>
      </select>
      <select
        className="border w-full p-2 rounded-lg hover:cursor-pointer sm:max-w-[300px]"
        onChange={handleVocabularyPartChange}
      >
        <option value="">Часть словаря</option>
        <option value="random">Случайная</option>
        {vocabularyParts}
      </select>
      <div className="flex flex-col gap-1 w-full sm:max-w-[300px]">
        <label
          htmlFor="vocabulary-size-range"
          className="min-w-[200px] text-left"
        >
          Количество слов: {vocabularySize}
        </label>
        <input
          type="range"
          min={10}
          max={maxValue}
          step={maxValue / 15}
          value={vocabularySize}
          onChange={handleRangeChange}
          name="vocabulary-size-range"
          className="min-w-[200px] bg-orange-300 rounded-xl appearance-none"
          id="vocabulary-size-range"
        />
      </div>

      <MainMenuBtn onClick={() => setShowSettings(false)}>Назад</MainMenuBtn>
    </div>
  );
}
