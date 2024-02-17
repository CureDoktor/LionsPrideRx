import Radio from "@components/Inputs/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import TextInput from "@components/Inputs/TextInput";

const Fifth = ({ setCurrentStep }) => {
  const methods = useForm();

  const onSubmit = () =>
    setTimeout(() => setCurrentStep((prev) => prev + 1), 500);

  return (
    <div className={styles.card}>
      <div>
        <h2>Great news! Telehealth treatment is available in (your state)!</h2>
        <h1>Let’s confirm your date of birth</h1>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.content}>
            <TextInput
              name="birth"
              variant="transition"
              placeholder="MM-DD-YYYY"
            />
            <button>Continue</button>
          </div>
        </form>
      </FormProvider>
      <p>
        Already have an account? <span>Log In</span>
      </p>
    </div>
  );
};

export default Fifth;
