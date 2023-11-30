import { hsk1WordType } from "../lib/data";

type Props = {
  word: hsk1WordType;
};

export default function Flashcard({ word }: Props) {
  return (
    <div>
      <span className="text-3xl mb-20 block">{word.Chinese}</span>
      <div className="flex flex-col">
        <div className="mb-1">
          <button className="mr-4 border rounded-lg py-2 px-4 border-stone-950">
            {word.Russian}
          </button>
          <button>{word.Russian}</button>
        </div>
        <div>
          <button>{word.Russian}</button>
          <button>{word.Russian}</button>
        </div>
      </div>
    </div>
  );
}
