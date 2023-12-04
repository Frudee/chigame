import { useState } from "react";
import MainScreen from "./screens/MainScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [mode, setMode] = useState("translateRus");
  const [vocabularyPart, setVocabularyPart] = useState<string | number>(
    "random"
  );
  return (
    <>
      {showGameScreen ? (
        <GameScreen
          mode={mode}
          setShowGameScreen={setShowGameScreen}
          vocabularyPart={vocabularyPart}
        />
      ) : (
        <MainScreen
          setMode={setMode}
          setShowGameScreen={setShowGameScreen}
          setVocabularyPart={setVocabularyPart}
        />
      )}
    </>
  );
}

export default App;
