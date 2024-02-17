import Radio from "@components/Inputs/Radio";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import TextInput from "@components/Inputs/TextInput";
import Image from "next/image";

import lockIcon from "@public/img/lock-icon.png";

const Sixth = ({ setCurrentStep }) => {
  const methods = useForm();

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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.content}>
              <TextInput
                type="email"
                name="email"
                variant="transition"
                placeholder="Email Address"
              />
              <button>Continue</button>
            </div>
          </form>
        </FormProvider>
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
