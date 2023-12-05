import { useState } from "react";
import MainMenuBtn from "../components/MainMenuBtn";
import Settings from "../components/Settings";

type Props = {
  setShowGameScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setVocabularyPart: React.Dispatch<React.SetStateAction<string | number>>;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  setVocabularySize: React.Dispatch<React.SetStateAction<number>>;
  vocabularySize: number;
};

export default function MainScreen({
  setShowGameScreen,
  setMode,
  setVocabularyPart,
  setVocabularySize,
  vocabularySize,
}: Props) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      {" "}
      {!showSettings ? (
        <div className="flex flex-col justify-center items-center gap-4 h-[100vh] w-full">
          <h1 className="font-myfont text-[62px] text-orange-500">
            爸爸 Chigame 爸爸
          </h1>
          <MainMenuBtn onClick={() => setShowGameScreen(true)}>
            Начать
          </MainMenuBtn>
          <MainMenuBtn onClick={() => setShowSettings(true)}>
            Настройки
          </MainMenuBtn>
        </div>
      ) : (
        <Settings
          vocabularySize={vocabularySize}
          setVocabularySize={setVocabularySize}
          setMode={setMode}
          setShowSettings={setShowSettings}
          setVocabularyPart={setVocabularyPart}
        />
      )}
    </>
  );
}
