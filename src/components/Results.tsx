type Props = {
  score: number;
  maxScore: number;
  restartGame: (wholeRestart?: boolean) => void;
};

export default function Results({ score, maxScore, restartGame }: Props) {
  const result = (score / maxScore) * 100;

  if (result > 90) {
    return (
      <div className="flex flex-col items-center rounded-xl bg-green-200 p-4">
        <span>Твой результат: {result.toFixed(2)}</span>
        <h2 className="text-lg font-semibold mb-4">
          Поздравляю, но можно было и лучше -_-
        </h2>
        <button
          className="border rounded-lg py-2 px-12  border-stone-950 hover:bg-green-400 hover:border-green-400 "
          onClick={() => restartGame(false)}
        >
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center rounded-xl bg-red-200 p-4 ">
        <span>Твой результат: {result.toFixed(2)}</span>
        <h2 className="text-lg font-semibold mb-4">
          Неуч, куда хуже то, жми "начать заново", быстро *_*
        </h2>
        <button
          className="border rounded-lg py-2 px-12  border-stone-950 hover:bg-red-400 hover:border-red-400 "
          onClick={() => restartGame(false)}
        >
          Restart
        </button>
      </div>
    );
  }
}
