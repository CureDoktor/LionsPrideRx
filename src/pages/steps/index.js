import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../store/auth-context";
import Axios from "axios";
import StepOne from "../../../components/StepOne";
import StepTwo from "../../../components/StepTwo";
import StepThree from "../../../components/StepThree";
import Router from "next/router";
export default function Steps() {
  const authCtx = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState({
    id: 1,
    partner_medication_id: "eb37cfd0-6b3a-472f-8cf6-2bdd1a0c806a",
    product_dosage_mg: "25.0",
    product_dosage_tag: "beginner",
    product_dosages_per_month: 4,
    product_image: "Viagra_25mg_4",
    product_price: "280.00",
    product_qty: 4,
    product_tag: "Viagra",
    product_title: "Viagra 25 mg, 4 day supply",
  });

  const getProduct = async () => {
    const route = "/api/case/get-product";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setProduct(res.data);
        })
        .catch((error) => {
          console.log(error);
          return alert("Not Good!");
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  var stepContent = "";

  if (step === 1) {
    stepContent = <StepOne changeStep={setStep} />;
  } else if (step === 2) {
    stepContent = <StepTwo changeStep={setStep} />;
  } else if (step === 3) {
    stepContent = <StepThree />;
  }
  return (
    <>
      <div>
        <main className="page">
          <div className="container">
            <div className="order-steps">
              <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-6 col-xl-7 col-xxl-8">
                  {stepContent}
                </div>
                <div className="col col-12 col-sm-10 col-md-6 col-lg-5 col-xxl-4">
                  <div className="card cart">
                    <div className="card-body">
                      <h4 className="card-title">Your Cart</h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>{product.product_tag}</h6>
                            <small>{product.product_title}</small>
                          </div>
                          <strong className="h6">
                            ${product.product_price}
                          </strong>
                        </li>
                        {/* <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>Monthly Subscription</h6>
                            <small>No commitments, cancel anytime</small>
                          </div>
                          <strong className="h6">$9.95</strong>
                        </li> */}
                        {/* <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>One Time Medical Fee**</h6>
                          </div>
                          <strong className="h6">$0.00</strong>
                        </li> */}
                        <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>USPS First Class Shipping</h6>
                          </div>
                          <strong className="h6">FREE</strong>
                        </li>
                        {/* <li className="list-group-item d-flex justify-content-between align-items-end">
                          <div className="text-success">
                            <h6>Coupon</h6>
                            <small>September Promo</small>
                          </div>
                          <strong className="h6 text-coupon">-$0.0</strong>
                        </li> */}
                        <li className="list-group-item d-flex justify-content-between total">
                          <strong className="h6">TOTAL</strong>
                          <strong className="h6">
                            {product.product_price}
                          </strong>
                        </li>
                      </ul>
                      <small className="cart-small">
                        *Or as prescribed by the doctor. Includes pharmacy
                        &amp;&nbsp;drug fees.
                      </small>
                      <small className="cart-small">
                        **The medical fee goes directly to the doctor and is
                        non-refundable.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
