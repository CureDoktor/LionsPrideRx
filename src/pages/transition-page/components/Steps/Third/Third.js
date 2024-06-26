import { Radio } from "@components/InputsOld/Radio/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import Link from "next/link";

const Third = ({ setCurrentStep }) => {
  const methods = useForm();

  const onSubmit = () =>
    setTimeout(() => setCurrentStep((prev) => prev + 1), 500);

  return (
    <div className={styles.card}>
      <h1>What resuts are you looking for?</h1>
      <div className={styles.content}>
        <FormProvider {...methods}>
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="results"
            label="Being able to get and keep on erection during sex"
            value="a1"
            variant="transition"
          />
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="results"
            label="Increasing my libido"
            value="a2"
            variant="transition"
          />
          <Radio
            options={{
              onChange: () => onSubmit(),
            }}
            name="erection"
            label="All of the above"
            value="a3"
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

export default Third;
