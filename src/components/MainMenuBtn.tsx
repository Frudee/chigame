import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string;
  children: ReactNode;
}

export default function MainMenuBtn({ children, classNames, ...rest }: Props) {
  return (
    <button
      className={`sm:max-w-[200px] w-full border rounded-lg py-2 hover:bg-orange-400 hover:text-white ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}
