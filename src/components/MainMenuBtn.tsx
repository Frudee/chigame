import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function MainMenuBtn({ name, ...rest }: Props) {
  return (
    <button
      className="min-w-[200px] border rounded-lg py-2 hover:bg-orange-400 hover:text-white"
      {...rest}
    >
      {name}
    </button>
  );
}
