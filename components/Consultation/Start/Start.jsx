import React from "react";
import styles from "./Start.styles.module.scss";
import { useEffect } from "react";
import { useConsultationContext } from "../../../store/consultation-context";

const Start = () => {
  const { setNextQuestion } = useConsultationContext();
  useEffect(() => {
    setNextQuestion(true);
  }, []);
  return (
    <div className={styles.container}>
      <h1>Let&apos;s Begin</h1>
      {/* <p>In three simple steps, your order will be on the way.</p> */}
      <ul>
        <li>
          <span>1</span>
          <p>Answer a few quick questions about your health.</p>
        </li>
        <li>
          <span>2</span>
          <p>Choose your treatment</p>
        </li>
        <li>
          <span>3</span>
          <p>24-hour doctor approval</p>
        </li>
      </ul>
    </div>
  );
};

export default Start;
