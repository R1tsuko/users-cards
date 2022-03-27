import classNames from "classnames";
import { ReactNode } from "react";
import s from "./s.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  green?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, green }) => {
  return (
    <button
      className={classNames(s.button, {
        [s.green]: green,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
