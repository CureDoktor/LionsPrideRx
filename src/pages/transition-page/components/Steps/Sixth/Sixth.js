import Radio from "@components/Inputs/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import TextInput from "@components/Inputs/TextInput";
import Image from "next/image";
import * as Yup from "yup";
import lockIcon from "@public/img/lock-icon.png";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Sixth = ({ setCurrentStep, goToNextStep }) => {
  const methods = useForm();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
  });

  const onSubmit = () =>
    setTimeout(() => setCurrentStep((prev) => prev + 1), 500);

  return (
    <div>
      <div className={styles.card}>
        <h2>Time to celebrate!</h2>
        <h1>You are eligible for telehealth treatment</h1>
        <p>
          Now, we just need you to complete a super quick 3-minute health
          questionnaire about your symptoms and medical history.
        </p>
        <p>(We promise - It’s seriously only 3 minutes)</p>
        <Formik
          initialValues={{
            email: localStorage.getItem("email")
              ? localStorage.getItem("email")
              : "",
          }}
          validationSchema={validationSchema}
          onSubmit={goToNextStep}
        >
          {({ isSubmitting }) => (
            <Form className={styles.content} style={{ width: "100%" }}>
              <Field
                type="email"
                name="email"
                className={styles.email}
                placeholder="Email Address"
              />
              <div name="email" className={styles.ErrorMessage}>
                <ErrorMessage name="email" />
              </div>
              <button className={styles.continue} type="submit">
                Continue
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Already have an account? <span>Log In</span>
        </p>
      </div>
      <div className={styles.disclaimer}>
        <p>
          We take your privacy very seriously. All your data is 256 bit SSL/TLS
          encrypted.
        </p>
        <Image src={lockIcon} width={9} height={13} alt="" />
      </div>
    </div>
  );
};

export default Sixth;
