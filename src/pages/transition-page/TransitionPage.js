import React from "react";
import MagicModal from "@components/MagicModal";
import styles from "./styles.module.scss";
import First from "./components/Steps/First";
import Second from "./components/Steps/Second";
import Third from "./components/Steps/Third";
import Fourth from "./components/Steps/Fourth";
import Fifth from "./components/Steps/Fifth";
import Sixth from "./components/Steps/Sixth";
import Seventh from "./components/Steps/Seventh";
import LoadingFirst from "./components/Steps/LoadingFirst";
import LoadingSecond from "./components/Steps/LoadingSecond";
import LoadingThird from "./components/Steps/LoadingThird";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../store/auth-context";
import Axios from "axios";
import { useRouter } from "next/router";

const TransitionPage = (props) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const authCtx = useContext(AuthContext);
  const [errorData, setErrorData] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_repeat: "",
    product_id: 1,
    date_of_birth: "",
  });

  const stepsMap = {
    0: First,
    1: Second,
    2: LoadingFirst,
    3: LoadingSecond,
    4: Third,
    5: LoadingThird,
    6: Fourth,
    7: Fifth,
    8: Sixth,
    9: Seventh,
  };

  const Step = stepsMap[currentStep];

  const submitForm = (values) => {
    try {
      let updatedForm = { ...form }; // Create a copy of the current form state
      for (const property in values) {
        updatedForm = {
          ...updatedForm,
          [property]: values[property],
        };
      }
      handleRegistration(updatedForm).then(setForm(updatedForm));
    } catch (error) {
      console.log(error);
    }
    //setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToNextStep = (values) => {
    for (const property in values) {
      setForm({
        ...form,
        [property]: values[property],
      });
    }

    setCurrentStep(currentStep + 1);
    // router.push(
    //   "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
    // );
  };

  const finishingStep = (values) => {
    for (const property in values) {
      setForm({
        ...form,
        [property]: values[property],
      });
    }

    console.log(form);
    // router.push(
    //   "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
    // );
  };

  const handleRegistration = async (formData) => {
    const route = "/api/auth/register";
    const headers = {
      "Content-Type": "application/json",
      scenario: "?scenario=dob", // Custom header with data
    };

    if (formData.password === formData.password_repeat) {
      try {
        const rese = await Axios.post(route, formData, { headers })
          .then((res) => {
            props.isLoggedIn();
            authCtx.setCaseId(res.data.lastCase.case_id);
            authCtx.settingToken(res.data.access_token);
            router.push("/medical-profile-questions");
          })
          .catch((error) => {
            props.setError({
              show: true,
              title: "",
              message: error.response.data,
            });
            setModalState(true);
          });
      } catch (err) {
        props.setError({
          show: true,
          title: "",
          message: "Username or password are not good!" + err,
        });
      }
    } else {
      props.setError({
        show: true,
        title: "",
        message: "Passwords doesn't match!",
      });
    }
  };

  return (
    <div className={styles.transitionPage}>
      <Step
        submitForm={submitForm}
        goToNextStep={goToNextStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default TransitionPage;
