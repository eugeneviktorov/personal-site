import { FC } from "react";
import { IInput } from "./Input.types";
import { classNames } from "@app/utils/classNames";
import styles from "./Input.module.css";
import { InputMask } from "@react-input/mask";

export const Input: FC<IInput> = ({
  value,
  onChange,
  disabled,
  icon,
  placeholder,
  inputMode,
  className,
  name,
  mask,
  replacement,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        className || "",
        (icon && styles.hasIcon) || "",
        (disabled && styles.disabled) || ""
      )}
    >
      {mask ? (
        <InputMask
          name={name}
          className={classNames(styles.input, (disabled && styles.disabled) || "")}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          inputMode={inputMode}
          disabled={disabled}
          mask={mask}
          replacement={replacement}
        />
      ) : (
        <input
          name={name}
          className={classNames(styles.input, (disabled && styles.disabled) || "")}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          inputMode={inputMode}
          disabled={disabled}
        />
      )}
      {icon}
    </div>
  );
};
