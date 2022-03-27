import classNames from "classnames";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import s from "./s.module.scss";

type TextAreaProps = {
  label: string;
  register: UseFormRegisterReturn;
  isError?: FieldError;
  disabled?: boolean;
  height?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  label,
  register,
  isError,
  disabled,
  height,
}) => {
  return (
    <label className={s.textAreaContainer}>
      <div className={s.label}>{label}</div>
      <textarea
        {...register}
        className={classNames(s.textArea, {
          [s.error]: isError,
          [s.disabled]: disabled,
        })}
        disabled={disabled}
        style={{ height }}
      />
    </label>
  );
};

export default TextArea;
