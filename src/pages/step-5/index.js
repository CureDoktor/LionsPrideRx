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
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
                <figure className="footer__logo">
                  <Image
                    className="/img-fluid"
                    src="/img/logo.svg"
                    width={256}
                    height={44}
                    alt="LionsPrideRX"
                  />
                </figure>
                <div className="footer__phone">
                  <p className="h5">Contact Us</p>
                  <a href="tel:1-800-234-7654">1-800-234-7654</a>
                </div>
                <div className="footer__payment">
                  <p className="h5">Payment Methods</p>
                  <Image
                    src="/img/payment-methods.png"
                    className="/img-fluid"
                    width={340}
                    height={40}
                    alt=""
                  />
                </div>
              </div>
              <div className="col col-sm-5 col-md-auto col-lg-2">
                <nav className="footer__menu">
                  <h5>Our Site</h5>
                  <ul>
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col col-xl-2">
                <nav className="footer__menu">
                  <h5>About</h5>
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Consent To Telehealth</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col col-12 col-md-6">
                <p className="footer__copyright">
                  LionsPrideRx. © 2023. All Rights Reserved
                </p>
              </div>
              <div className="col col-12 col-md-6">
                <ul className="footer__socials">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        width={40}
                        height={40}
                      >
                        <path
                          fill="#ef2929"
                          d="M 25.806 15.6 L 21.856 15.6 L 21.856 13 C 21.856 12.025 22.494 11.8 22.956 11.8 L 25.744 11.8 L 25.744 7.513 L 21.906 7.5 C 17.631 7.5 16.656 10.7 16.656 12.738 L 16.656 15.6 L 14.194 15.6 L 14.194 20.012 L 16.656 20.012 L 16.656 32.5 L 21.856 32.5 L 21.856 20.012 L 25.356 20.012 L 25.806 15.6 Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#ef2929"
                          d="M 15.725 29.345 C 24.404 29.345 29.152 22.154 29.152 15.928 C 29.152 15.727 29.152 15.522 29.144 15.321 C 30.068 14.653 30.865 13.824 31.5 12.874 C 30.636 13.256 29.722 13.507 28.784 13.619 C 29.772 13.03 30.51 12.102 30.865 11.007 C 29.938 11.557 28.922 11.943 27.864 12.147 C 25.374 9.496 20.949 10.534 19.899 14.015 C 19.661 14.806 19.634 15.646 19.821 16.451 C 16.026 16.262 12.49 14.471 10.093 11.522 C 8.843 13.679 9.485 16.435 11.557 17.821 C 10.809 17.796 10.077 17.596 9.42 17.235 L 9.42 17.299 C 9.422 19.544 11.004 21.478 13.203 21.925 C 12.799 22.037 12.38 22.093 11.96 22.091 C 11.664 22.092 11.368 22.064 11.077 22.008 C 11.695 23.931 13.468 25.245 15.486 25.282 C 13.815 26.596 11.747 27.309 9.62 27.304 C 9.246 27.306 8.873 27.284 8.5 27.24 C 10.66 28.617 13.164 29.347 15.725 29.345 Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#ef2929"
                          d="M 20.08 11.219 L 20.22 11.219 C 21.504 11.224 28.012 11.271 29.767 11.743 C 30.847 12.037 31.689 12.88 31.978 13.962 C 32.135 14.555 32.247 15.341 32.322 16.152 L 32.337 16.315 L 32.372 16.721 L 32.384 16.884 C 32.485 18.312 32.498 19.649 32.5 19.942 L 32.5 20.059 C 32.498 20.362 32.484 21.79 32.372 23.277 L 32.359 23.442 L 32.345 23.604 C 32.267 24.498 32.151 25.386 31.978 26.039 C 31.691 27.12 30.848 27.966 29.767 28.258 C 27.954 28.745 21.065 28.779 20.11 28.781 L 19.889 28.781 C 19.405 28.781 17.408 28.772 15.315 28.7 L 15.049 28.691 L 14.912 28.685 L 14.646 28.673 L 14.378 28.663 C 12.644 28.586 10.993 28.463 10.231 28.256 C 9.153 27.964 8.309 27.118 8.021 26.039 C 7.847 25.387 7.731 24.498 7.653 23.604 L 7.641 23.44 L 7.628 23.277 C 7.552 22.218 7.509 21.158 7.5 20.096 L 7.5 19.904 C 7.503 19.568 7.516 18.406 7.6 17.125 L 7.611 16.965 L 7.616 16.884 L 7.628 16.721 L 7.662 16.315 L 7.678 16.152 C 7.753 15.341 7.865 14.553 8.022 13.962 C 8.311 12.88 9.153 12.035 10.233 11.743 C 10.994 11.54 12.646 11.415 14.38 11.337 L 14.646 11.325 L 14.915 11.316 L 15.049 11.312 L 15.316 11.3 C 16.804 11.252 18.292 11.225 19.779 11.221 L 20.08 11.221 L 20.08 11.219 Z M 17.501 16.235 L 17.501 23.764 L 23.996 20.001 L 17.501 16.235 Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#ef2929"
                          d="M 20 7.5 C 16.608 7.5 16.182 7.515 14.848 7.575 C 13.515 7.638 12.608 7.847 11.813 8.157 C 10.978 8.47 10.222 8.963 9.598 9.598 C 8.963 10.223 8.47 10.978 8.157 11.813 C 7.847 12.607 7.636 13.515 7.575 14.844 C 7.515 16.18 7.5 16.605 7.5 20.002 C 7.5 23.395 7.515 23.82 7.575 25.153 C 7.638 26.485 7.847 27.392 8.157 28.188 C 8.477 29.01 8.903 29.707 9.598 30.402 C 10.292 31.097 10.989 31.525 11.811 31.843 C 12.608 32.153 13.514 32.364 14.845 32.425 C 16.18 32.485 16.605 32.5 20 32.5 C 23.395 32.5 23.819 32.485 25.153 32.425 C 26.483 32.363 27.394 32.153 28.189 31.843 C 29.023 31.53 29.778 31.038 30.402 30.402 C 31.097 29.707 31.523 29.01 31.843 28.188 C 32.152 27.392 32.363 26.485 32.425 25.153 C 32.485 23.82 32.5 23.395 32.5 20 C 32.5 16.605 32.485 16.18 32.425 14.845 C 32.363 13.515 32.152 12.607 31.843 11.813 C 31.53 10.978 31.038 10.223 30.402 9.598 C 29.778 8.963 29.022 8.47 28.188 8.157 C 27.39 7.847 26.482 7.636 25.152 7.575 C 23.817 7.515 23.394 7.5 19.997 7.5 L 20.002 7.5 L 20 7.5 Z M 18.88 9.753 L 20.002 9.753 C 23.339 9.753 23.735 9.764 25.052 9.825 C 26.27 9.88 26.933 10.085 27.373 10.255 C 27.957 10.482 28.373 10.753 28.811 11.19 C 29.248 11.628 29.518 12.044 29.745 12.628 C 29.917 13.067 30.12 13.73 30.175 14.948 C 30.236 16.265 30.248 16.661 30.248 19.997 C 30.248 23.333 30.236 23.73 30.175 25.047 C 30.12 26.265 29.915 26.927 29.745 27.367 C 29.545 27.91 29.225 28.4 28.81 28.803 C 28.372 29.24 27.957 29.511 27.372 29.738 C 26.935 29.91 26.272 30.113 25.052 30.168 C 23.735 30.228 23.339 30.242 20.002 30.242 C 16.664 30.242 16.267 30.228 14.95 30.168 C 13.732 30.113 13.07 29.91 12.63 29.738 C 12.088 29.538 11.595 29.219 11.192 28.803 C 10.777 28.4 10.457 27.91 10.255 27.365 C 10.085 26.927 9.88 26.264 9.825 25.045 C 9.765 23.728 9.753 23.333 9.753 19.994 C 9.753 16.657 9.765 16.263 9.825 14.945 C 9.882 13.727 10.085 13.064 10.257 12.623 C 10.483 12.04 10.755 11.623 11.192 11.186 C 11.63 10.748 12.045 10.478 12.63 10.252 C 13.07 10.08 13.732 9.877 14.95 9.82 C 16.103 9.767 16.55 9.752 18.88 9.75 L 18.88 9.753 Z M 26.673 11.828 C 25.519 11.828 24.797 13.078 25.375 14.078 C 25.642 14.542 26.138 14.828 26.673 14.828 C 27.828 14.828 28.55 13.578 27.972 12.578 C 27.705 12.114 27.21 11.828 26.673 11.828 Z M 20.002 13.582 C 15.06 13.505 11.888 18.807 14.292 23.123 C 15.442 25.19 17.636 26.458 20.002 26.42 C 24.944 26.344 27.948 20.945 25.411 16.705 C 24.27 14.797 22.223 13.615 20.002 13.582 Z M 20.002 15.833 C 23.21 15.833 25.214 19.305 23.611 22.083 C 22.865 23.373 21.49 24.167 20.002 24.167 C 16.794 24.167 14.789 20.695 16.392 17.917 C 17.138 16.627 18.513 15.833 20.002 15.833 Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#ef2929"
                          d="M 21.56 7.6 L 24.651 7.6 C 24.877 8.716 25.494 10.125 26.578 11.522 C 27.641 12.894 29.045 13.846 30.923 13.846 L 30.923 16.97 C 28.19 16.97 26.135 15.698 24.683 14.114 L 24.683 24.78 C 24.683 30.79 18.179 34.548 12.977 31.542 C 7.776 28.537 7.776 21.021 12.977 18.017 C 14.165 17.331 15.511 16.97 16.879 16.97 L 16.879 20.094 C 13.275 20.094 11.021 23.998 12.825 27.122 C 14.627 30.246 19.131 30.246 20.935 27.122 C 21.345 26.41 21.56 25.601 21.56 24.78 L 21.56 7.6 Z"
                          style={{}}
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#ef2929"
                          d="M 14.909 16.264 L 14.909 29.5 L 11.289 29.5 L 11.289 16.264 L 14.909 16.264 M 15.2 12.615 C 15.2 13.801 14.244 14.758 13.086 14.758 C 11.927 14.758 11 13.801 11 12.615 C 11 11.456 11.927 10.5 13.086 10.5 C 14.251 10.508 15.194 11.45 15.2 12.615 M 29.334 21.362 L 29.334 29.5 L 25.713 29.5 L 25.713 22.751 C 25.713 18.697 20.905 19.016 20.905 22.751 L 20.905 29.5 L 17.315 29.5 L 17.315 16.264 L 20.905 16.264 L 20.905 18.406 C 22.586 15.279 29.334 15.048 29.334 21.362"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
