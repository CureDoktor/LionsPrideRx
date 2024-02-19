import React from "react";
import styles from "./Start.styles.module.scss";
import { useRouter } from "next/router";
import { ChevronRight } from "react-bootstrap-icons";

const Start = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>
        Birthday* <span>(ID verified after checkout)</span>
      </h1>
      <input type="number" />
      <button
        type="button"
        onClick={() => {
          router.push(`/questionnaire?question=1/`, undefined, {
            shallow: true,
          });
        }}
      >
        Next
        <ChevronRight fontSize={20} />
      </button>
    </div>
  );
};

export default Start;
