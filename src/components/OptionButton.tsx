import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: string;
}

export default function OptionButton({ option, ...rest }: Props) {
  return (
    <button
      className="border rounded-lg py-2 px-2 grow basis-0 shrink hover:bg-orange-300 hover:border-orange-300 hover:text-white"
      {...rest}
    >
      {option}
    </button>
  );
}
