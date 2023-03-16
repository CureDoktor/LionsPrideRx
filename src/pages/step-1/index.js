import Image from "next/image";
export default function StepOne() {
  return (
    <>
      <div>
        <div className="offer">
          <p>Get your first month + online doctor visit for only $10</p>
        </div>
        <header className="navbar navbar-dark bg-dark">
          <div className="container">
            <h1 className="visually-hidden">LionsPrideRX</h1>
            <a className="navbar-brand" href="./">
              <Image
                src="/img/logo.svg"
                width={224}
                height={38}
                alt="LionsPrideRX"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#nav"
              aria-controls="nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex={-1}
              id="nav"
            >
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="./">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="membership.html">
                      Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <strong>Logout(sample@gmail.com)</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <main className="page">
          <article className="container">
            <div className="order-steps">
              <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-6 col-xl-7 col-xxl-8">
                  <form
                    action="step-2.html"
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
                              name="first-name"
                              maxLength={50}
                              placeholder
                              defaultValue="John"
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
                              id="last-name"
                              name="last-name"
                              maxLength={50}
                              placeholder
                              defaultValue
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
                            <select
                              id="month"
                              name="month"
                              className="form-select"
                              required
                            >
                              <option value selected>
                                Select Month
                              </option>
                              <option value="January">January</option>
                              <option value="January">January</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a month
                            </div>
                          </div>
                          <div className="col col-6 col-sm-7 col-xl-3 mb-4">
                            <select
                              id="day"
                              name="day"
                              className="form-select"
                              required
                            >
                              <option value selected>
                                DD
                              </option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                              <option value={13}>13</option>
                              <option value={14}>14</option>
                              <option value={15}>15</option>
                              <option value={16}>16</option>
                              <option value={17}>17</option>
                              <option value={18}>18</option>
                              <option value={19}>19</option>
                              <option value={20}>20</option>
                              <option value={21}>21</option>
                              <option value={22}>22</option>
                              <option value={23}>23</option>
                              <option value={24}>24</option>
                              <option value={25}>25</option>
                              <option value={26}>26</option>
                              <option value={27}>27</option>
                              <option value={28}>28</option>
                              <option value={29}>29</option>
                              <option value={30}>30</option>
                              <option value={31}>31</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a date
                            </div>
                          </div>
                          <div className="col col-6 col-sm-5 col-xl-3 mb-4">
                            <select
                              id="year"
                              name="year"
                              className="form-select"
                              required
                            >
                              <option value selected>
                                YYYY
                              </option>
                              <option value={1940}>1940</option>
                              <option value={1941}>1941</option>
                              <option value={1942}>1942</option>
                              <option value={1943}>1943</option>
                              <option value={1944}>1944</option>
                              <option value={1945}>1945</option>
                              <option value={1946}>1946</option>
                              <option value={1947}>1947</option>
                              <option value={1948}>1948</option>
                              <option value={1949}>1949</option>
                              <option value={1950}>1950</option>
                              <option value={1951}>1951</option>
                              <option value={1952}>1952</option>
                              <option value={1953}>1953</option>
                              <option value={1954}>1954</option>
                              <option value={1955}>1955</option>
                              <option value={1956}>1956</option>
                              <option value={1957}>1957</option>
                              <option value={1958}>1958</option>
                              <option value={1959}>1959</option>
                              <option value={1960}>1960</option>
                              <option value={1961}>1961</option>
                              <option value={1962}>1962</option>
                              <option value={1963}>1963</option>
                              <option value={1964}>1964</option>
                              <option value={1965}>1965</option>
                              <option value={1966}>1966</option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>
                              <option value={1975}>1975</option>
                              <option value={1976}>1976</option>
                              <option value={1977}>1977</option>
                              <option value={1978}>1978</option>
                              <option value={1979}>1979</option>
                              <option value={1980}>1980</option>
                              <option value={1981}>1981</option>
                              <option value={1982}>1982</option>
                              <option value={1983}>1983</option>
                              <option value={1984}>1984</option>
                              <option value={1985}>1985</option>
                              <option value={1986}>1986</option>
                              <option value={1987}>1987</option>
                              <option value={1988}>1988</option>
                              <option value={1989}>1989</option>
                              <option value={1990}>1990</option>
                              <option value={1991}>1991</option>
                              <option value={1992}>1992</option>
                              <option value={1993}>1993</option>
                              <option value={1994}>1994</option>
                              <option value={1995}>1995</option>
                              <option value={1996}>1996</option>
                              <option value={1997}>1997</option>
                              <option value={1998}>1998</option>
                              <option value={1999}>1999</option>
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>
                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                              <option value={2016}>2016</option>
                              <option value={2017}>2017</option>
                              <option value={2018}>2018</option>
                              <option value={2019}>2019</option>
                              <option value={2020}>2020</option>
                              <option value={2021}>2021</option>
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a year
                            </div>
                          </div>
                        </div>
                        <div className="row">
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
                              <option value selected>
                                Select State
                              </option>
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
