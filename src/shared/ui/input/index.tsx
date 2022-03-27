import classNames from "classnames";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import s from "./s.module.scss";

type InputProps = {
  label: string;
  register: UseFormRegisterReturn;
  isError?: FieldError;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  register,
  isError,
  disabled,
}) => {
  return (
    <label className={s.inputContainer}>
      <div className={s.label}>{label}</div>
      <input
        {...register}
        className={classNames(s.input, {
          [s.error]: isError,
          [s.disabled]: disabled,
        })}
        disabled={disabled}
      />
    </label>
  );
};

export default Input;
