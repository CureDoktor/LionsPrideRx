import Radio from "@components/Inputs/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import TextInput from "@components/Inputs/TextInput";
import Checkbox from "@components/Inputs/Checkbox";
import Select from "@components/Inputs/Select";

const Fourth = ({ setCurrentStep }) => {
  const methods = useForm();

  const items = [
    {
      value: "new-york",
      label: "New York",
    },
    {
      value: "california",
      label: "California",
    },
  ];

  const onSubmit = () =>
    setTimeout(() => setCurrentStep((prev) => prev + 1), 500);

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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <h1>Select your state</h1>
          <div className={styles.content}>
            <div>
              <Select
                name="state"
                options={{
                  required: true,
                }}
                variant="transition"
                items={items}
              />
              <Checkbox
                name="terms"
                label="I acknowledge the Terms and Conditions, Privacy Policy, and Telehealth Consent."
                variant="transition"
                value="terms"
              />
            </div>
            <button>Continue</button>
          </div>
        </form>
      </FormProvider>
      <p>
        Already have an account? <span>Sign In</span>
      </p>
    </div>
  );
};

export default Fourth;
