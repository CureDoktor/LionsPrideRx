import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
import Router from "next/router";
export default function StepOne(props) {
  const authCtx = useContext(AuthContext);
  const handleChange = (event) => {
    console.log("Ide jebiga");
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    shippingAddress: "",
    shippingCityName: "",
    shippingState: "",
    shippingZip: "",
    phone: "",
  });

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updateShippingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          props.changeStep(3);
        })
        .catch((error) => {
          console.log(error);
          return alert("Not Good11!");
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
                    noValidate
                    onSubmit={submitHandler}
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
                          style={{ width: "40%" }}
                        />
                      </div>
                      <h3>Confirm Delivery Address</h3>
                      <p className="lead">
                        Fast, free shipping from a certified, US pharmacy after
                        we receive your prescription.
                      </p>
                    </header>
                    <div className="card">
                      <div className="card-body">
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
                          <div className="col col-12 mb-4">
                            <label htmlFor="address" className="form-label">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              onChange={handleChange}
                              name="shippingAddress"
                              maxLength={100}
                              required
                            />
                            <div className="invalid-feedback">
                              Street address is required
                            </div>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col col-12 mb-4">
                            <label htmlFor="apt-suite" className="form-label">
                              Apt/Suite (Optional)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="apt-suite"
                              name="apt-suite"
                              maxLength={100}
                              placeholder
                              defaultValue
                            />
                          </div>
                        </div> */}

                        <div className="row">
                          <div className="col col-12 col-xl-6 mb-4 mb-lg-2">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              name="shippingCityName"
                              onChange={handleChange}
                              maxLength={50}
                              required
                            />
                            <div className="invalid-feedback">
                              City is required
                            </div>
                          </div>
                          <div className="col col-6 col-sm-7 col-xl-3 mb-2">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <select
                              id="state"
                              name="shippingState"
                              onChange={handleChange}
                              className="form-select"
                              required
                            >
                              <option defaultValue="State">State</option>
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
                              State is required
                            </div>
                          </div>
                          <div className="col col-6 col-sm-5 col-xl-3 mb-2">
                            <label htmlFor="zip" className="form-label">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              name="shippingZip"
                              maxLength={5}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">
                              Zip is required
                            </div>
                          </div>
                          <div className="col col-12 mb-4">
                            <p className="note">
                              Delivery available for all 50 states and
                              Washington D.C.
                            </p>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col col-12">
                            <label
                              htmlFor="instructions"
                              className="form-label"
                            >
                              Special Instructions
                            </label>
                            <textarea
                              className="form-control"
                              id="instructions"
                              name="instructions"
                              rows={2}
                              defaultValue={""}
                            />
                            <p className="note mt-2">
                              e.g. Leave it with the doorman, Ring the bell for
                              2F…
                            </p>
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
