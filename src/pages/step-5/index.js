import Image from "next/image";
export default function StepFive() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <div className="order-steps">
              <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-6 col-xl-7 col-xxl-8">
                  <form
                    action="order.html"
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
                              name="cc-number"
                              maxLength={30}
                              placeholder
                              defaultValue="1234  1234  1234  1234"
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
                              name="cc-expiration"
                              maxLength={7}
                              placeholder="MM / YY"
                              defaultValue
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
                              type="text"
                              className="form-control"
                              id="cc-cvc"
                              name="cc-cvc"
                              maxLength={3}
                              placeholder="CVC"
                              defaultValue
                              required
                            />
                            <div className="invalid-feedback">
                              CVC is required
                            </div>
                          </div>
                          <div className="col col-12 col-xl-4 col-xxl-6 mb-4">
                            <label htmlFor="zip" className="form-label">
                              Billing Zip Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              name="zip"
                              maxLength={5}
                              placeholder
                              defaultValue
                              required
                            />
                            <div className="invalid-feedback">
                              Zip is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12">
                            <button
                              className="btn btn-primary float-end"
                              type="button"
                            >
                              Save
                            </button>
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
