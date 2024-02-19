import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import TextInput from "@components/Inputs/TextInput";

const Sixth = () => {
  const methods = useForm();

  const onSubmit = () => {};

  return (
    <div className={styles.card}>
      <h2>One last step!</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.content}>
            <h1>Create password</h1>
            <TextInput
              type="password"
              name="password"
              variant="transition"
              placeholder="Password"
            />
            <p>
              Creating an account allows you to keep track of your orders,
              payment information, and medical profile (or if you need to make
              changes in the future).
            </p>
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

export default Sixth;
