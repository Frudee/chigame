import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function MainMenuBtn({ name, ...rest }: Props) {
  return <button {...rest}>{name}</button>;
}
