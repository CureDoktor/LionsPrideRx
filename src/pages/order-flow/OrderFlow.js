import First from "@components/OrderFlow/Steps/First";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Second from "@components/OrderFlow/Steps/Second";
import Third from "@components/OrderFlow/Steps/Third";
import Fourth from "@components/OrderFlow/Steps/Fourth";
import Fifth from "@components/OrderFlow/Steps/Fifth";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";

import arrowIcon from "@public/img/product-landing/carousel-arrow.png";
import { Container } from "react-bootstrap";
import Sixth from "@components/OrderFlow/Steps/Sixth";
import Seventh from "@components/OrderFlow/Steps/Seventh";
import Loading from "@components/OrderFlow/Steps/Loading";

const BackButton = ({ setCurrentStep }) => {
  return (
    <Container>
      <div className={styles.back} onClick={() => setCurrentStep((s) => s - 1)}>
        <Image src={arrowIcon} alt="" width={20} height={26} />
      </div>
    </Container>
  );
};

const OrderFlow = () => {
  const methods = useForm();
  const [product, setProduct] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const stepsMap = {
    0: First,
    1: Second,
    2: Loading,
    3: Third,
    4: Fourth,
    5: Fifth,
    6: Sixth,
    7: Seventh,
  };

  const onSubmit = (v) => console.log(v);

  const Step = stepsMap[currentStep];

  return (
    <div className={styles.container}>
      {currentStep !== 0 && currentStep !== 2 && currentStep !== 6 && (
        <BackButton setCurrentStep={setCurrentStep} />
      )}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Step
            product={product}
            setProduct={setProduct}
            setCurrentStep={setCurrentStep}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default OrderFlow;
