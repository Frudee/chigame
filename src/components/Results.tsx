type Props = {
  score: number;
  maxScore: number;
  restartGame: (wholeRestart?: boolean, shuffle?: boolean) => void;
  vocabularyPart: string | number;
};

export default function Results({
  score,
  maxScore,
  restartGame,
  vocabularyPart,
}: Props) {
  const result = (score / maxScore) * 100;
  if (result > 90) {
    return (
      <div className="flex flex-col items-center rounded-xl bg-green-200 p-4">
        <span>Твой результат: {result.toFixed(2)}</span>
        <h2 className="text-lg font-semibold mb-4">
          Поздравляю, но можно было и лучше 😒
        </h2>
        <button
          className="border rounded-lg py-2 px-12 mb-2 border-gray-300  hover:bg-green-400 hover:border-green-400 "
          onClick={() => restartGame(false, true)}
        >
          Начать заново
        </button>
        {vocabularyPart === "random" && (
          <button
            className="border rounded-lg py-2 px-12 border-gray-300  hover:bg-green-400 hover:border-green-400 "
            onClick={() => restartGame(true)}
          >
            Обновить слова
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center rounded-xl bg-red-200 p-4 ">
        <span>Твой результат: {result.toFixed(2)}</span>
        <h2 className="text-lg font-semibold mb-4">
          Неуч, куда хуже то, жми "начать заново", быстро 😡
        </h2>
        <button
          className="border rounded-lg py-2 px-12 mb-2 grow basis-0 border-gray-400  hover:bg-red-400 hover:border-red-400 "
          onClick={() => restartGame(false, true)}
        >
          Начать заново
        </button>
      </div>
    );
  }
}
