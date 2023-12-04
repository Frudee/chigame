import { FC } from "react";
import OptionButton from "./OptionButton";

interface Option {
  Russian: string;
}

interface OptionsListProps {
  currentOptions: Option[];
  word: Option;
  handleAnswer: (selectedOption: string, correctOption: string) => void;
}

const OptionsList: FC<OptionsListProps> = ({
  currentOptions,
  word,
  handleAnswer,
}) => {
  return (
    <div className="flex flex-col grow w-full items-center">
      <div className="mb-4 flex w-full grow gap-4">
        <OptionButton
          option={currentOptions[0].Russian}
          onClick={() => handleAnswer(currentOptions[0].Russian, word.Russian)}
        />
        <OptionButton
          option={currentOptions[1].Russian}
          onClick={() => handleAnswer(currentOptions[1].Russian, word.Russian)}
        />
      </div>
      <div className="mb-4 flex w-full grow gap-4">
        <OptionButton
          option={currentOptions[2].Russian}
          onClick={() => handleAnswer(currentOptions[2].Russian, word.Russian)}
        />
        <OptionButton
          option={currentOptions[3].Russian}
          onClick={() => handleAnswer(currentOptions[3].Russian, word.Russian)}
        />
      </div>
    </div>
  );
};

export default OptionsList;
