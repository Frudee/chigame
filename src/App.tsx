import { useState } from "react";
import MainScreen from "./screens/MainScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [mode, setMode] = useState("translateRus");
  return (
    <>
      {showGameScreen ? (
        <GameScreen mode={mode} setShowGameScreen={setShowGameScreen} />
      ) : (
        <MainScreen setMode={setMode} setShowGameScreen={setShowGameScreen} />
      )}
    </>
  );
}

export default App;
