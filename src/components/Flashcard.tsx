import { hsk1WordType } from "../lib/data";
import { getRandomObjects, insertAtRandomPosition } from "../lib/helpers";
import OptionButton from "./OptionButton";

type Props = {
  word: hsk1WordType;
  options: hsk1WordType[];
};

export default function Flashcard({ word, options }: Props) {
  const currentOptions: hsk1WordType[] = getRandomObjects(
    options,
    3,
    word.Russian
  );
  insertAtRandomPosition(currentOptions, word);

  return (
    <div className="w-1/3 flex flex-col items-center">
      <div className="flex flex-col items-center h-56">
        <span className="text-3xl mb-5 block ">{word.Chinese}</span>
        <span className="text-lg  block">{word.Pinyin}</span>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="mb-4 flex w-[40%] justify-around">
          <OptionButton option={currentOptions[0].Russian} />
          <OptionButton option={currentOptions[1].Russian} />
        </div>
        <div className="mb-4 flex w-[40%] justify-around">
          <OptionButton option={currentOptions[2].Russian} />
          <OptionButton option={currentOptions[3].Russian} />
        </div>
      </div>
    </div>
  );
}
