import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ text, ...props }: ButtonProps) => (
  <button
    className="w-full h-12 text-2xl text-white bg-primary hover:bg-primary-contrast rounded-lg disabled:opacity-50 disabled:pointer-events-none"
    {...props}
  >
    {text}
  </button>
);

export default Button;
