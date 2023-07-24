import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
export default function StepTwo(props) {
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    phone: "",
  });

  const authCtx = useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updateShippingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          props.changeStep(3);
        })
        .catch((error) => {
          const cure = error.response.data;
          const rest = Object.values(cure);
          var values = "";
          rest.map((element) => {
            values = values + element + " ";
          });

          return alert(values);
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
                  <form onSubmit={submitHandler} className="form validate">
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
                          style={{ width: "80%" }}
                        />
                      </div>
                      <h3>Enter your mobile phone number</h3>
                      <p className="lead">
                        We&apos;ll only contact you with important updates and
                        order confirmation.
                      </p>
                    </header>
                    <div className="card">
                      <div className="card-body">
                        {/* <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="email" className="form-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              maxLength={50}
                              required
                            />
                            <div className="invalid-feedback">
                              Valid email address is required
                            </div>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <input
                              className="form-control"
                              id="phone"
                              name="phone"
                              maxLength={50}
                              onChange={handleChange}
                              value={formData.phone}
                              required
                            />
                            <div className="invalid-feedback">
                              Phone Number is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12">
                            <div className="form-check mb-3">
                              <input
                                id="marketing"
                                name="marketing"
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="marketing"
                              >
                                <small>
                                  By checking this box, you authorize
                                  LionsPrideRx (or its agents) to send recurring
                                  marketing messages using an automatic
                                  telephone dialing system. Signing this consent
                                  is not a condition of purchasing property,
                                  goods or services through us.
                                </small>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                id="medication"
                                name="medication"
                                type="checkbox"
                                className="form-check-input"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="medication"
                              >
                                <small>
                                  Include medication names in email and SMS from
                                  LionsPrideRx (recommended).
                                </small>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-submit">
                      <button className="btn btn-primary" type="submit">
                        Continue
                      </button>
                    </div>
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
