import Image from "next/image";
import { useContext, useState, useEffect, React } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";
export default function StepThree() {
  const authCtx = useContext(AuthContext);
  const handlePayChange = (event) => {
    const { value, name } = event.target;
    setFormPayData({
      ...formPayData,
      [name]: value,
    });
  };

  const [formPayData, setFormPayData] = useState({
    payment_processor: "credit_card",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
    billingSameAsShipping: 1,
  });

  const orderWithUserProfile = async () => {
    const route = "/api/order/order-from-profile";
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
      })
        .then((res) => {
          Router.push("/profile");
        })
        .catch((error) => {
          return alert(error.response);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  };

  async function submitPayHandler(event) {
    event.preventDefault();
    const route = "/api/user/updatePaymentInfo";
    const formData = formPayData;
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
        formData,
      })
        .then((res) => {
          orderWithUserProfile();
        })
        .catch((error) => {
          console.log(error);
          return alert("Not Good!");
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }
  return (
    <>
      <div>
        <main>
          <div className="container">
            <div>
              <div className="row justify-content-center">
                <div className="col col-12">
                  <form
                    className="form validate"
                    onSubmit={submitPayHandler}
                    noValidate
                  >
                    <header className="form-header">
                      <div
                        className="progress"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <h3>Payment Information</h3>
                      <p className="lead">
                        Make sure the information below matches the
                        prescription.
                      </p>
                    </header>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="cc-number" className="form-label">
                              Card Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-number"
                              name="creditCardNumber"
                              onChange={handlePayChange}
                              value={formPayData.creditCardNumber}
                              maxLength={30}
                              required
                            />
                            <div className="invalid-feedback">
                              Valid credit card number is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-6 col-xl-4 col-xxl-3 mb-4">
                            <label
                              htmlFor="cc-expiration"
                              className="form-label"
                            >
                              Expiration&nbsp;Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-expiration"
                              name="expirationDate"
                              onChange={handlePayChange}
                              value={formPayData.expirationDate}
                              maxLength={7}
                              placeholder="MM/YY"
                              required
                            />
                            <div className="invalid-feedback">
                              Expiration date is required
                            </div>
                          </div>
                          <div className="col col-6 col-xl-4 col-xxl-3 mb-4">
                            <label htmlFor="cc-cvc" className="form-label">
                              Security&nbsp;Code
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="cc-cvc"
                              name="cvv"
                              onChange={handlePayChange}
                              value={formPayData.cvv}
                              maxLength={3}
                              required
                            />
                            <div className="invalid-feedback">
                              CVC is required
                            </div>
                          </div>
                          {/* <div className="col col-12 col-xl-4 col-xxl-6 mb-4">
                            <label htmlFor="zip" className="form-label">
                              Billing Zip Code
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="zip"
                              name="zip"
                              maxLength={5}
                              onChange={handlePayChange}
                              required
                            />
                            <div className="invalid-feedback">
                              Zip is required
                            </div>
                          </div> */}
                        </div>
                        <div className="row">
                          <div className="col col-12">
                            <button
                              className="btn btn-primary float-end"
                              type="submit"
                            >
                              Save & Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="btn-submit">
                      <button className="btn btn-primary" type="submit">
                        Continue
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
