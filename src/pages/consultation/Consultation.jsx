import Head from "next/head";
import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Consultation.styles.module.scss";
import Start from "@components/Consultation/Start/Start";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import { useConsultationContext } from "../../../store/consultation-context";
import QuestionParser from "@components/Consultation/QuestionParser";
import Form from "@components/Form";
import { useForm } from "react-hook-form";
import Axios from "axios";
import AuthContext from "../../../store/auth-context";
import { useRef } from "react";
import { searchParamsUrl } from "@components/searchParams";

const Consultation = (props) => {
  console.log(props);
  const { showNextQuestion, productChanged } = useConsultationContext();
  const [initialRender, setInitialRender] = useState(true);
  const buttonRef = useRef(null);
  const [StartingQuestions, setStartingQuestions] = useState([
    {
      id: 1,
      questionnaire_id: 1,
      title:
        "Are you seeking treatment to help obtain or maintain an erection?",
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
  ]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return; // Skip the effect on initial render
    }
    goNextQuestion();
  }, [productChanged]);

  const authCtx = useContext(AuthContext);

  const gettingQuestions = async () => {
    const route = "/api/case/get-questions";
    const headers = {
      "Content-Type": "application/json",
      case: authCtx.Case(),
    };
    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token() },
        { headers }
      )
        .then((res) => {
          console.log(res.data.data.questions);
          setStartingQuestions(res.data.data.questions);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    const questions = StartingQuestions.filter((q) => q.visibility === 1);
    const followUpQuestions = StartingQuestions.filter(
      (q) => q.visibility !== 1
    );

    const questionMap = {};

    followUpQuestions.forEach((question) => {
      questionMap[question.id] = question;
    });

    setQuestions({
      main: questions,
      questionMap,
      total: questions.length,
    });
  }, [StartingQuestions]);

  const router = useRouter();
  const { reset } = useForm();
  const { query } = router;
  const { setQuestions, questions, setFormValues, data, enableButton } =
    useConsultationContext() || {};
  const { total: totalQuestions } = questions;
  const question = query?.question ? parseInt(query?.question) : 0;
  const notLastQuestion = question !== totalQuestions;

  useEffect(() => {
    gettingQuestions();
  }, []);

  const content = () => {
    if (!query?.question) {
      return "Let's begin";
    } else if (notLastQuestion) {
      return "Next Question";
    } else {
      return "Submit";
    }
  };

  const handleSubmit = async (formData) => {
    const route = "/api/questions/save-questions";
    const headers = {
      "Content-Type": "application/json",
      case: authCtx.Case(),
    };
    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token(), formData },
        { headers }
      )
        .then((res) => {
          localStorage.setItem("currentStep", 1);
          router.push("/order-flow" + searchParamsUrl());
        })
        .catch((error) => {
          props.props.props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  const goNextQuestion = () => {
    if (notLastQuestion) {
      router.push(
        `/medical-profile-questions?question=${question + 1}/` +
          searchParamsUrl(),
        undefined,
        {
          shallow: true,
        }
      );
      props.setCurrentStep(question + 1);
      props.setProgress(((props.currentStep + 1) / props.totalSteps) * 100);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lions Pride Rx - Consultation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main>
        <Container>
          <Form defaultValues={data} onSubmit={handleSubmit}>
            <Row className={styles.row}>
              <Col className={styles.col} xs={12} lg={7}>
                {!question ? (
                  <Start />
                ) : (
                  <QuestionParser
                    setCurrentStep={props.setCurrentStep}
                    setTotalSteps={props.setTotalSteps}
                    setProgress={props.setProgress}
                  />
                )}
                <Button
                  style={{
                    display: showNextQuestion ? "block" : "none",
                    textTransform: !query?.question ? "none" : "uppercase",
                    background: !enableButton ? "gray" : "red",
                  }}
                  disabled={!enableButton}
                  ref={buttonRef}
                  type={!notLastQuestion ? "submit" : "button"}
                  onClick={goNextQuestion}
                  endAdornment={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  {content()}
                </Button>
                {!query?.question && (
                  <div className={styles.footer}>
                    {/* <p className={styles.help}>
                      Need help? <Link href="#">Live chat with us</Link>
                    </p> */}
                    <p className={styles.disclaimer}>
                      *If your treatment isn&apos;t approved by our medical
                      experts, we&apos;ll cancel your order and you won&apos;t
                      be charged.
                    </p>
                  </div>
                )}
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    </div>
  );
};

export default Consultation;
