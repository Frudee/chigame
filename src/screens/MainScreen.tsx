import { useState } from "react";
import MainMenuBtn from "../components/MainMenuBtn";
import Settings from "../components/Settings";

type Props = {
  setShowGameScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

export default function MainScreen({ setShowGameScreen, setMode }: Props) {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      {" "}
      {!showSettings ? (
        <div className="flex flex-col justify-center items-center h-[100vh] w-full">
          <MainMenuBtn
            name="Начать"
            onClick={() => setShowGameScreen(true)}
          ></MainMenuBtn>
          <MainMenuBtn name="Настройки" onClick={() => setShowSettings(true)} />
        </div>
      ) : (
        <Settings setMode={setMode} setShowSettings={setShowSettings} />
      )}
    </>
  );
}
