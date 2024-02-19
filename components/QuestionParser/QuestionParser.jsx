import React from "react";
import { useRouter } from "next/router";
import styles from "./QuestionParser.styles.module.scss";
import Link from "next/link";
import { useQuestionParser } from "./hooks/useQuestionParser";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const QuestionParser = ({ questions }) => {
  const { main, total } = questions;
  const router = useRouter();
  const questionId = parseInt(router.query?.question) || "";
  const notLastQuestion = questionId !== total;
  const previousQuestionLink =
    parseInt(router.query?.question) === 1
      ? "/questionnaire"
      : `/questionnaire?question=${questionId - 1}`;
  const { parsedQuestion, parsedFollowUpQuestions } = useQuestionParser({
    questions,
  });

  if (!main) return "Loading...";

  return (
    <div className={styles.container}>
      <div className={styles.questionWrapper}>
        <h4 className={styles.title}>{parsedQuestion.title}</h4>
        <div className={styles.options}>{parsedQuestion.answers}</div>
        {parsedFollowUpQuestions}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => router.push(previousQuestionLink)}>
          <ChevronLeft fontSize={20} /> Back
        </button>
        <button>
          Next <ChevronRight fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default QuestionParser;
