import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: string;
}

export default function OptionButton({ option, ...rest }: Props) {
  return (
    <button
      className="border rounded-lg py-2 px-2 grow basis-0 shrink border-stone-950 hover:bg-green-300 hover:border-green-300 "
      {...rest}
    >
      {option}
    </button>
  );
}
