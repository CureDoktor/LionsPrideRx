import { Radio } from "@components/InputsOld/Radio/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const Second = ({ setCurrentStep }) => {
  const methods = useForm({
    defaultValues: {
      erection: "",
    },
  });

  const onSubmit = () => {
    console.log("CRURUEUEU");
    setTimeout(() => setCurrentStep((prev) => prev + 1), 500);
  };

  return (
    <div className={styles.card}>
      <h1>
        How often do you have trouble getting or keeping an erection during sex?
      </h1>
      <div className={styles.content}>
        <FormProvider {...methods}>
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="erection"
            label="Everytime"
            value="a1"
            variant="transition"
          />
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="erection"
            label="Half the time"
            value="a2"
            variant="transition"
          />
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="erection"
            label="On occasion"
            value="a3"
            variant="transition"
          />
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="erection"
            label="Rarely"
            value="a4"
            variant="transition"
          />
        </FormProvider>
      </div>
      <p>
        Already have an account? <span>Sign In</span>
      </p>
    </div>
  );
};

export default Second;
