import { ReactNode } from "react";
import s from "./s.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
