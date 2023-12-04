type Props = {
  setMode: React.Dispatch<React.SetStateAction<string>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Settings({ setMode, setShowSettings }: Props) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100vh] w-full">
      <select
        className="border p-2 rounded-lg"
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="">Режим</option>
        <option value="translateRus">Перевод на русский</option>
        <option value="typeChinese">Ввод иероглифов</option>
      </select>

      <button onClick={() => setShowSettings(false)}>Назад</button>
    </div>
  );
}
