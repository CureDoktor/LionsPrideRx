import Radio from "@components/Inputs/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import TextInput from "@components/Inputs/TextInput";
import Checkbox from "@components/Inputs/Checkbox";
import Axios from "axios";
import Link from "next/link";
import Select from "@components/Inputs/Select";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ApiError from "@components/Apifunction";
const Fourth = ({ setCurrentStep }) => {
  const methods = useForm();

  const [states, setStates] = useState([
    {
      "abbreviation": "NE",
      "name": "Nebraska",
      "state_id": "782679a1-8679-4ac9-a0e4-92226b4a2f67",
      "message": "",
      "is_active": 1,
    },
  ]);

  const getStates = async () => {
    const route = "/api/states";
    try {
      const rese = await Axios.post(route)
        .then((res) => {
          setStates(
            res.data.data.sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          );
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  const validationSchema = Yup.object().shape({
    state: Yup.string()
      .required("Please select a state")
      .notOneOf(
        ["AK"],
        "Unfortunately our services are not offered in this state. We hope to change that in the near future."
      ),
    checkbox: Yup.bool().oneOf(
      [true],
      "You must acknowledge the Terms and Conditions"
    ),
  });

  // const onSubmit = (e) => {
  //   console.log(e);
  //   //setTimeout(() => setCurrentStep((prev) => prev + 1), 500);
  // };

  return (
    <div className={styles.card}>
      <div className={styles.banner}>
        <p>
          Your <span>$30 off promo code</span> has been applied!
        </p>
      </div>
      <p className={styles.preheading}>
        Let’s make sure telehealth treatments are allowed in your state
      </p>
      <Formik
        initialValues={{ state: "", checkbox: false }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values.state);
          localStorage.setItem("state", values.state);
          // setPreferredState(values.state);
          setCurrentStep((prev) => prev + 1, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.content}>
              <div className={styles.selectContainer}>
                <Field as="select" name="state" className={styles.select}>
                  <option value="" disabled>
                    Select a state
                  </option>
                  {states.map((state) => {
                    return (
                      <option
                        key={state.abbreviation}
                        value={`${state.abbreviation}`}
                      >
                        {state.name}
                      </option>
                    );
                  })}
                </Field>
                <span name="state" className={styles.ErrorMessage}>
                  <ErrorMessage name="state" />
                </span>
              </div>
              <div className={styles.checkBox}>
                <label className="d-flex">
                  <Field type="checkbox" name="checkbox" />
                  <p>
                    I acknowledge the Terms and Conditions, Privacy Policy, and
                    Telehealth Consent.
                  </p>
                </label>
                <span name="checkbox" className={styles.ErrorMessage}>
                  <ErrorMessage name="checkbox" />
                </span>
              </div>
              <button className={styles.continue} type="submit">
                Continue
              </button>
              <p className={styles.signIn}>
                Already have an account?{" "}
                <Link href={"/login"} style={{ color: "blue" }}>
                  Sign In
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Fourth;
