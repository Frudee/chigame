type Props = {
  option: string;
};

export default function OptionButton({ option }: Props) {
  return (
    <button className="border rounded-lg py-2 px-2 border-stone-950 hover:bg-green-300 hover:border-green-300 min-w-[100px]">
      {option}
    </button>
  );
}
