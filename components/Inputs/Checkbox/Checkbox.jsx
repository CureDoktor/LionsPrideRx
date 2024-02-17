import React, { memo, useMemo } from "react";

import styles from "./Checkbox.styles.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { CheckSquare, CheckSquareFill } from "react-bootstrap-icons";

const Checkmark = ({ checked }) => {
  if (checked) return <CheckSquareFill className={styles.checkmark} />;

  return <CheckSquare className={styles.checkmark} />;
};

const Checkbox = ({
  checkmark = true,
  label,
  name,
  value,
  variant = "default",
  options,
  onChange,
  endAdornment,
  style,
  resetFieldId,
}) => {
  const { register, setValue } = useFormContext();
  const checkedValues = useWatch(name)[name] || [];
  const checked = useMemo(
    () => (checkedValues ? checkedValues?.find((el) => el === value) : false),
    [checkedValues, value]
  );
  console.log(checkedValues, checked);
  const checkedStyles = checked ? styles.checked : "";
  const variantMap = {
    default: styles.default,
    contained: styles.contained,
    outlined: styles.outlined,
    transition: styles.transition,
  };
  const handleChange = (e) => {
    if (e.target.value === resetFieldId) {
      if (!e.target.checked)
        setValue(name, [
          ...checkedValues?.filter((el) => {
            return el !== resetFieldId;
          }),
        ]);
      else setValue(name, [resetFieldId]);
    } else {
      if (!e.target.checked)
        setValue(name, [
          ...checkedValues?.filter((val) => val !== e.target.value),
        ]);
      else
        setValue(name, [
          ...checkedValues?.filter((val) => val !== resetFieldId),
          e.target.value,
        ]);
    }

    onChange?.();
  };

  return (
    <label
      style={style}
      className={`${styles.container} ${variantMap[variant]} ${checkedStyles} `}
    >
      <div className={styles.wrapper}>
        {checkmark && <Checkmark checked={checked} />}
        <input
          {...register(name, options)}
          type="checkbox"
          onChange={handleChange}
          value={value}
        />
        <span className={styles.label}>{label}</span>
      </div>
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </label>
  );
};

export default memo(Checkbox);
