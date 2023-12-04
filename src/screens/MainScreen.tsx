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
        <div className="flex flex-col justify-center items-center gap-4 h-[100vh] w-full">
          <h1 className="font-myfont text-[62px] text-orange-500">
            爸爸 Chigame 爸爸
          </h1>
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
