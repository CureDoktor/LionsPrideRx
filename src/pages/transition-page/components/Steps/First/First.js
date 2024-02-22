import React, { useState } from "react";
import styles from "./styles.module.scss";
import { CheckCircleFill } from "react-bootstrap-icons";

const buttonsConfig = [
  {
    id: 1,
    text: "Looking for help?",
  },
  {
    id: 2,
    text: "We have treatments!",
  },
  {
    id: 3,
    text: "Get your medication quick and easy",
  },
  {
    id: 4,
    text: (
      <>
        Let`s get started{" "}
        <CheckCircleFill
          width={16}
          height={16}
          fill="#940000"
          style={{ marginLeft: 10 }}
        />
      </>
    ),
  },
];

const First = ({ setCurrentStep }) => {
  const [list, setList] = useState([
    {
      id: 0,
      text: "Hey guys",
    },
  ]);

  const handleClick = (id) => {
    if (id !== 4) setList((prev) => [...prev, buttonsConfig[id]]);
    else setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className={styles.card}>
      {list?.map((button) => (
        <button
          key={button.id}
          disabled={button.id !== list.length - 1}
          onClick={() => handleClick(button.id)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default First;
