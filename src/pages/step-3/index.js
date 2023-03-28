import Image from "next/image";
import Link from "next/link";
export default function StepThree() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <div className="order-steps">
              <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-6 col-xl-7 col-xxl-8">
                  <form
                    action="step-4.html"
                    className="form validate"
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
                          style={{ width: "60%" }}
                        />
                      </div>
                      <h3>Additional Patient Profile</h3>
                      <p className="lead">
                        We&apos;ll use this information to help you double-check
                        for drug interactions.
                      </p>
                    </header>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col col-12 mb-4">
                            <label
                              htmlFor="allergies-yes"
                              className="form-label"
                            >
                              Does the patient have any allergies?
                            </label>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="allergies-yes"
                                  name="allergies"
                                  type="radio"
                                  className="form-check-input"
                                  defaultValue="yes"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="allergies-yes"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="allergies-no"
                                  name="allergies"
                                  type="radio"
                                  className="form-check-input"
                                  defaultValue="no"
                                  defaultChecked
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="allergies-no"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12 mb-4">
                            <label
                              htmlFor="medications-yes"
                              className="form-label"
                            >
                              Does the patient take other medications?
                            </label>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="medications-yes"
                                  name="medications"
                                  type="radio"
                                  className="form-check-input"
                                  defaultValue="yes"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="medications-yes"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="medications-no"
                                  name="medications"
                                  type="radio"
                                  className="form-check-input"
                                  defaultValue="no"
                                  defaultChecked
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="medications-no"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12">
                            <label
                              htmlFor="conditions-yes"
                              className="form-label"
                            >
                              Does the patient have any health conditions?
                            </label>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="conditions-yes"
                                  name="conditions"
                                  type="radio"
                                  className="form-check-input"
                                  defaultValue="yes"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="conditions-yes"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="conditions-no"
                                  name="conditions"
                                  type="radio"
                                  className="form-check-input"
                                  defaultValue="no"
                                  defaultChecked
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="conditions-no"
                                >
                                  No
                                </label>
                              </div>
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
                <div className="col col-12 col-sm-10 col-md-6 col-lg-5 col-xxl-4">
                  <aside className="card cart">
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
                  </aside>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
