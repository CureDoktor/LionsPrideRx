import React, { useState } from "react";
import styles from "./styles.module.scss";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useRef } from "react";

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
  const initialized = useRef(false);
  const [step, setStep] = useState(null);
  const [firstTime, setfirstTime] = useState(true);

  const [list, setList] = useState([
    {
      id: 0,
      text: "Hey guys",
    },
  ]);

  useEffect(() => {
    if (!firstTime) {
      setTimeout(() => {
        handleClick(step);
      }, 3000);
    } else {
      setfirstTime(false);
      setStep(0);
    }
  }, [step]);

  const handleClick = (id) => {
    if (id !== 4) {
      setList((prev) => [...prev, buttonsConfig[id]]);
      setStep(step + 1);
    } else setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className={styles.card}>
      {list?.map((button) => (
        <button key={button.id} disabled={button.id !== list.length - 1}>
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default First;
