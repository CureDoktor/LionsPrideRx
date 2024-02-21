import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

const Radio = ({ name, value, label, price }) => {
  const { register, watch } = useFormContext();
  const watchValue = watch(name);
  const isChecked = watchValue === value;

  return (
    <label className={`${styles.radio} ${isChecked ? styles.checked : ""}`}>
      <input {...register(name)} value={value} type="radio" />
      <span>{label}</span>
      <span>${price}</span>
    </label>
  );
};

export default Radio;
