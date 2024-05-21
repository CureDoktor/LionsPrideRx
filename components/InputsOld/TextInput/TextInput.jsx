import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./TextInput.styles.module.scss";

const TextInput = ({
  placeholder,
  name,
  type = "text",
  variant = "default",
  options,
  endAdornment,
  style,
}) => {
  const { register } = useFormContext();
  const variantMap = {
    default: styles.default,
    transition: styles.transition,
  };
  return (
    <div className={styles.container}>
      <input
        {...register(name, options)}
        style={style}
        required
        className={`${styles.input} ${variantMap[variant]}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
