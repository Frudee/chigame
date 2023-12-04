import MainMenuBtn from "./MainMenuBtn";
import { ReactNode } from "react";

type Props = {
  setMode: React.Dispatch<React.SetStateAction<string>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setVocabularyPart: React.Dispatch<React.SetStateAction<string | number>>;
};

export default function Settings({
  setMode,
  setShowSettings,
  setVocabularyPart,
}: Props) {
  const vocabularyParts: ReactNode[] = [];
  for (let i = 0; i < 15; i++) {
    vocabularyParts.push(
      <option key={i} value={i}>
        Часть {i + 1}
      </option>
    );
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100vh] ">
      <h2 className="text-[22px]">Настройки</h2>
      <select
        className="border p-2 rounded-lg hover:cursor-pointer min-w-[200px]"
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="">Режим</option>
        <option value="translateRus">Перевод на русский</option>
        <option value="typeChinese">Ввод иероглифов</option>
      </select>
      <select
        className="border p-2 rounded-lg hover:cursor-pointer min-w-[200px]"
        onChange={(e) => setVocabularyPart(e.target.value)}
      >
        <option value="">Часть словаря</option>
        <option value="random">Случайная</option>
        {vocabularyParts}
      </select>

      <MainMenuBtn onClick={() => setShowSettings(false)}>Назад</MainMenuBtn>
    </div>
  );
}
