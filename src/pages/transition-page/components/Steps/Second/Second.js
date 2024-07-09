import { Radio } from "@components/InputsOld/Radio/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import Link from "next/link";

const Second = ({ setCurrentStep }) => {
  const methods = useForm({
    defaultValues: {
      erection: "",
    },
  });

  const onSubmit = () => {
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
        Already have an account?{" "}
        <Link href={"/login"} style={{ color: "blue" }}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Second;
