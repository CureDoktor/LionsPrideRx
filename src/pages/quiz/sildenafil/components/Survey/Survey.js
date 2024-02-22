import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Question from "./components/Question";

import styles from "./styles.module.scss";
import FindTreatment from "../FindTreatment";
import Steps from "../Steps";
import FAQ from "../FAQ";

const Survey = () => {
  const defaultValues = {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  };

  const q1answers = [
    {
      label: "Harder erections",
      value: "a1",
    },
    {
      label: "More sex-drive",
      value: "a2",
    },
    {
      label: "All of the above",
      value: "a3",
    },
  ];

  const q2answers = [
    {
      label: "Yes",
      value: "a1",
    },
    {
      label: "No",
      value: "a2",
    },
  ];

  const form = useForm({
    defaultValues: defaultValues,
  });

  const qWatch = form.watch?.();

  const onSubmit = (values) => console.log(values);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Question
          className={styles.questionOne}
          id="1"
          title="What sex life improvements are you looking for?"
          answers={q1answers}
        />
        {qWatch?.q1 && (
          <div style={{ backgroundColor: "#F5F5F5" }}>
            <Question
              className={styles.questionTwo}
              id="2"
              title="Are you looking to skip waiting rooms and pharmacy lines?"
              answers={q2answers}
            />
          </div>
        )}
        {qWatch?.q2 && (
          <Question
            className={styles.questionThree}
            id="3"
            title="Do you want your ED medication shipped directly and discreetly to your door?"
            answers={q2answers}
          />
        )}
        {qWatch?.q3 && (
          <div style={{ backgroundColor: "#F5F5F5" }}>
            <Question
              className={styles.questionFour}
              id="4"
              title="Are you looking for ED medication that is FDA-approved and trusted by doctors?"
              subtitle="(of course you are!)"
              answers={q2answers}
            />
          </div>
        )}
        {qWatch?.q4 && (
          <>
            <FindTreatment scrollTo />
            <hr />
            <Steps />
            <FAQ />
            <FindTreatment second />
          </>
        )}
      </form>
    </FormProvider>
  );
};

export default Survey;
