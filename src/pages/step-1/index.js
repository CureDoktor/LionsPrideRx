import Image from "next/image";
import { useContext, useState, useEffect, React } from "react";
import Axios from "axios";
import AuthContext from "../../../store/auth-context";
import Router from "next/router";
import Link from "next/link";
export default function StepOne() {
  const authCtx = useContext(AuthContext);
  const handleChange = (event) => {
    console.log("CUreee");
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const route = "/api/case/medical-form";
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), payload })
        .then((res) => {
          Router.push("/step-2");
        })
        .catch((error) => {
          alert(error.response.data.errors);
        });
    } catch (err) {
      alert("Username or password are not good! 22" + err);
    }
  };
  return (
    <>
      <div>
        <main className="page">
          <div className="container">
            <div className="order-steps">
              <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-6 col-xl-7 col-xxl-8">
                  <form
                    action="step-2.html"
                    className="form validate"
                    noValidate
                    onSubmit={handleSubmit}
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
                          style={{ width: "20%" }}
                        />
                      </div>
                      <h3>Who is this medication&nbsp;for?</h3>
                      <p className="lead">
                        Make sure the information below matches the
                        prescription.
                      </p>
                    </header>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="first-name" className="form-label">
                              Patient&apos;s First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="first-name"
                              name="firstName"
                              maxLength={50}
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">
                              Patient&apos;s first name is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="last-name" className="form-label">
                              Patient&apos;s Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              name="lastName"
                              maxLength={50}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">
                              Patient&apos;s last name is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12">
                            <label htmlFor="month" className="form-label">
                              Patient&apos;s Date Of Birth
                            </label>
                          </div>
                          <div className="col col-12 col-xl-6 mb-4">
                            <input
                              id="month"
                              name="month"
                              className="form-control"
                              type="date"
                              onChange={handleChange}
                              name="dob"
                              required
                            />
                            <div className="invalid-feedback"></div>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="male" className="form-label">
                              Patient&apos;s Gender
                            </label>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="male"
                                  name="gender"
                                  type="radio"
                                  className="form-check-input"
                                  defaultChecked
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="male"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="female"
                                  name="gender"
                                  type="radio"
                                  className="form-check-input"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="female"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12 col-lg-9 col-xl-6">
                            <label htmlFor="state" className="form-label">
                              Current State
                            </label>
                            <select
                              id="state"
                              name="state"
                              className="form-select"
                              required
                            >
                              <option value="select">Select State</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>
                            <div className="invalid-feedback">
                              Current state is required
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="btn-submit">
                      <button className="btn btn-primary" type="submit">
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col col-12 col-sm-10 col-md-6 col-lg-5 col-xxl-4">
                  <div className="card cart">
                    <div className="card-body">
                      <h4 className="card-title">Your Cart</h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>Sildenafil Citrate</h6>
                            <small>10 tablets, 50mg*</small>
                          </div>
                          <strong className="h6">$19.95</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>Monthly Subscription</h6>
                            <small>No commitments, cancel anytime</small>
                          </div>
                          <strong className="h6">$9.95</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>One Time Medical Fee**</h6>
                          </div>
                          <strong className="h6">$10.00</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <div>
                            <h6>USPS First Class Shipping</h6>
                          </div>
                          <strong className="h6">FREE</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-end">
                          <div className="text-success">
                            <h6>Coupon</h6>
                            <small>September Promo</small>
                          </div>
                          <strong className="h6 text-coupon">-$29.90</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between total">
                          <strong className="h6">TOTAL</strong>
                          <strong className="h6">$10.00</strong>
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
