import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useConsultationContext } from "../../../store/consultation-context";
import QuestionParser from "./components/QuestionParser";
import Start from "./components/Start";
import styles from "./styles.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import Steps from "./components/Steps";
import Header from "./components/Header";

const mockQuestions = [
  {
    id: 1,
    questionnaire_id: 1,
    title: "Are you seeking treatment to help obtain or maintain an erection?",
    type: "radio",
    visibility: 1,
    question_order: 1,
    rules:
      "required|['requiredValue' => 1,\r\n                 'message'       => 'At this time we only treat male patients looking to improve their sexual performance.']",
    questionsAnswers: [
      {
        id: 1,
        question_id: 1,
        title: "Yes",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 2,
        question_id: 1,
        title: "No",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
];

const Consultation = (props) => {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const questions = mockQuestions.filter((q) => q.visibility === 1);
    const followUpQuestions = mockQuestions.filter((q) => q.visibility !== 1);

    const questionMap = {};

    followUpQuestions.forEach((question) => {
      questionMap[question.id] = question;
    });

    setQuestions({
      main: questions,
      questionMap,
      total: questions.length,
    });
  }, []);

  const router = useRouter();
  const { query } = router;
  const { total: totalQuestions } = questions;
  const question = query?.question ? parseInt(query?.question) : 0;
  const notLastQuestion = question !== totalQuestions;

  const methods = useForm();

  return (
    <>
      <Steps />
      <div className={styles.container}>
        <Container>
          <FormProvider {...methods}>
            <form>
              <Row style={{ justifyContent: "center" }}>
                <Col xs={12} lg={7}>
                  <Header total={totalQuestions} currentQuestion={question} />
                  {!question ? (
                    <Start />
                  ) : (
                    <QuestionParser questions={questions} />
                  )}
                </Col>
              </Row>
            </form>
          </FormProvider>
        </Container>
      </div>
    </>
  );
};

export default Consultation;
