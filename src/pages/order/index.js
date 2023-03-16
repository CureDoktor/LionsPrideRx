export default function Orders() {
  return (
    <div>
      <div className="offer">
        <p>Get your first month + online doctor visit for only $10</p>
      </div>
      <header className="navbar navbar-dark bg-dark">
        <div className="container">
          <h1 className="visually-hidden">LionsPrideRX</h1>
          <a className="navbar-brand" href="./">
            <img
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
          <header className="order-hero">
            <div className="row">
              <div className="col col-12">
                <div className="order-hero__header">
                  <figure className="order-hero__security">
                    <img
                      src="/img/security-seals.png"
                      width={190}
                      height={32}
                      alt=""
                    />
                  </figure>
                  <p className="lead">Order Below</p>
                  <h2 className="order-hero__heading">
                    Get 90% OFF FDA-Approved ED&nbsp;Pills
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-end row--space">
              <div className="col col-12 col-md-6">
                <figure className="order-hero__image">
                  <img
                    className="/img-fluid"
                    src="/img/person-3.webp"
                    width={302}
                    height={376}
                    alt=""
                  />
                </figure>
              </div>
              <div className="col col-12 col-md-6">
                <div className="order-hero__content">
                  <ul className="list-group list-group-features">
                    <li className="list-group-item">
                      <strong>Complete Online Process</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>No doctor’s appointment required</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>100% Genuine ED Pills</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>No hidden charges</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Free Rushed Shipping</strong>
                    </li>
                  </ul>
                  <p className="order-hero__title">
                    Always be Ready for Sexual Action with LionsPrideRx!
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className="testimonials">
            <div className="row">
              <div className="col col-12 col-md-6 col-xl-4">
                <div className="testimonials__entry">
                  <blockquote className="blockquote">
                    <p>
                      Had I known it was this easy and affordable to get generic
                      Viagra, I would have done it years ago!
                    </p>
                    <footer className="blockquote-footer">
                      Verified Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-xl-4">
                <div className="testimonials__entry">
                  <blockquote className="blockquote">
                    <p>
                      No more awkward visits to my doctor, and I get my refills
                      shipped to&nbsp;my doorstep. Amazing
                    </p>
                    <footer className="blockquote-footer">
                      Verified Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-xl-4">
                <div className="testimonials__entry">
                  <blockquote className="blockquote">
                    <p>
                      These pills are just as good as the brand-name pills I
                      used to get that were 10 times more expensive
                    </p>
                    <footer className="blockquote-footer">
                      Verified Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-xl-4">
                <div className="testimonials__entry">
                  <blockquote className="blockquote">
                    <p>
                      LionsPrideRx saves me hundreds every month on ED pills and
                      doctor’s&nbsp;fees
                    </p>
                    <footer className="blockquote-footer">
                      Verified Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-xl-4">
                <div className="testimonials__entry">
                  <blockquote className="blockquote">
                    <p>
                      This is the best online ED pill service&nbsp;I’ve ever
                      tried. Simple, easy,&nbsp;affordable.
                    </p>
                    <footer className="blockquote-footer">
                      Verified Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-xl-4">
                <div className="testimonials__entry">
                  <blockquote className="blockquote">
                    <p>
                      With LionsPrideRx, I’m always sure I’m getting the real
                      thing, not the cheap, fake pills that other sites sell
                    </p>
                    <footer className="blockquote-footer">
                      Verified Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <p className="testimonials__note">*Individual results may vary</p>
          </div>
          <div className="black">
            <section className="steps">
              <div className="row justify-content-center">
                <div className="col col-12">
                  <header className="steps__header">
                    <h2 className="steps__heading">
                      LionsPrideRx offers the SIMPLEST, EASIEST, and MOST
                      AFFORDABLE way to get E.D. Pills ONLINE!
                    </h2>
                    <p className="lead">
                      Order GENUINE E.D. Pills Online in under 5 minutes!
                    </p>
                  </header>
                </div>
                <div className="col col-12 col-md-6 col-lg-4">
                  <article className="steps__section">
                    <figure>
                      <img
                        className="/img-fluid"
                        src="/img/step-1.jpg"
                        width={340}
                        height={300}
                        alt=""
                      />
                      <figcaption>Step 1</figcaption>
                    </figure>
                    <h6>Select your treatment plan</h6>
                    <p>
                      LionsPrideRx offers a variety of treatment plans,
                      including generic and brand-name E.D. pills that fit your
                      budget and preference.
                    </p>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-lg-4">
                  <article className="steps__section">
                    <figure>
                      <img
                        className="/img-fluid"
                        src="/img/step-2.jpg"
                        width={340}
                        height={300}
                        alt=""
                      />
                      <figcaption>Step 2</figcaption>
                    </figure>
                    <h6>Finalize your order</h6>
                    <p>
                      Complete your order with your preferred payment method. No
                      doctor’s fees, no handling fees, no hidden charges. Pay
                      only for your E.D.&nbsp;pills!
                    </p>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-lg-4">
                  <article className="steps__section">
                    <figure>
                      <img
                        className="/img-fluid"
                        src="/img/step-3.jpg"
                        width={340}
                        height={300}
                        alt=""
                      />
                      <figcaption>Step 3</figcaption>
                    </figure>
                    <h6>Answer a quick health review</h6>
                    <p>
                      A US-licensed physician will review your health
                      information to properly supervise your treatment. Once
                      completed, your order will be shipped directly to your
                      doorstep!
                    </p>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <section className="compare">
            <h3 className="compare__heading">
              Compare LionsPrideRx with other Pharmacies and see why we’re the
              #1 Most Trusted E.D. Pill&nbsp;Service!
            </h3>
            <div className="compare__space">
              <table className="table table-dark compare__table">
                <thead>
                  <tr>
                    <th>
                      <div className="compare__logo" />
                    </th>
                    <td>
                      <div className="compare__bottles" />
                    </td>
                    <td>
                      <div className="compare__brand-a">
                        LOCAL <br />
                        PHARMACY
                      </div>
                    </td>
                    <td>
                      <div className="compare__brand-b">
                        ONLINE <br />
                        PHARMACY
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Lowest Price Per&nbsp;Unit</th>
                    <td>$1.75</td>
                    <td>$35-40</td>
                    <td>$65-70</td>
                  </tr>
                  <tr>
                    <th>FDA-Approved</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                  </tr>
                  <tr>
                    <th>US-Licensed Physician</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>Made in The USA</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>Rx Quality Generic Viagra</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>1-year Treatment Plan</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>Zero Doctor's Fees</th>
                    <td>$0</td>
                    <td>$250 average cost per visit</td>
                    <td>
                      $40-50 online consul<span className="hid">-</span>tation
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Zero Service/<span className="hid"> </span>Handling Fees
                    </th>
                    <td>$0</td>
                    <td>$5 per refill</td>
                    <td>
                      $5-10 per transac<span className="hid">-</span>tion
                    </td>
                  </tr>
                  <tr>
                    <th>No doctor's Appointment Required</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      2-3 <span className="nobr">check-ups</span> per year
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                  </tr>
                  <tr>
                    <th>Free Rushed Shipping</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      Store <span className="nobr">pick-up</span>
                    </td>
                    <td>$5.95-10.00</td>
                  </tr>
                  <tr>
                    <th>
                      QUICK and EASY <span className="nobr">5-minute</span>{" "}
                      ONLINE Process
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="guarantee">
            <div className="row">
              <div className="col col-12">
                <div className="guarantee__badges">
                  <figure>
                    <img
                      className="/img-fluid"
                      src="/img/guarantee-satisfaction.webp"
                      width={160}
                      height={160}
                      alt=""
                    />
                  </figure>
                  <figure>
                    <img
                      className="/img-fluid"
                      src="/img/made-in-usa.webp"
                      width={160}
                      height={160}
                      alt=""
                    />
                  </figure>
                </div>
                <h3 className="guarantee__heading">
                  UNMATCHED QUALITY, SAFETY, and CONFIDENCE
                </h3>
                <p className="lead">
                  Discover the UNLIMITED possibilities of having
                  PRIME&nbsp;Sexual Health with LionsPrideRx
                </p>
                <p>
                  Nothing beats the confidence of having FDA-approved E.D. pills
                  to boost your performance at any given time! LionsPrideRx
                  makes it easier, simpler, and&nbsp;much more affordable to get
                  top-quality, Rx-strength generic Viagra and Cialis shipped to
                  your doorstep.
                </p>
                <p>
                  No in-person visits with your doctor, no&nbsp;time-consuming
                  appointments, and&nbsp;no&nbsp;awkward encounters with
                  local&nbsp;pharmacists.
                </p>
                <p>
                  Save time and money, protect your privacy, and get the best
                  confidence boost in the bedroom with genuine, FDA-approved
                  E.D. pills from LionsPrideRx.
                </p>
                <ul className="list-group list-group-features">
                  <li className="list-group-item">
                    <strong>Save up to 90% off vs brand-name pills</strong>
                  </li>
                  <li className="list-group-item">
                    <strong>
                      GenericMatch<sup>™</sup> Guarantee – FDA-approved Generic
                      Viagra and Cialis
                    </strong>
                  </li>
                  <li className="list-group-item">
                    <strong>Made in the USA</strong>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="quiz">
            <h3 className="quiz__heading">
              Get a customized treatment plan by answering the&nbsp;questions
              below:
            </h3>
            <section className="quiz__entry">
              <h4>How often do you want to have sex every month?</h4>
              <input
                type="radio"
                className="btn-check"
                name="sex"
                id="sex-4"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-primary" htmlFor="sex-4">
                4 times
              </label>
              <input
                type="radio"
                className="btn-check"
                name="sex"
                id="sex-8"
                autoComplete="off"
              />
              <label className="btn btn-primary" htmlFor="sex-8">
                8 times
              </label>
              <input
                type="radio"
                className="btn-check"
                name="sex"
                id="sex-10"
                autoComplete="off"
              />
              <label className="btn btn-primary" htmlFor="sex-10">
                10 or more
              </label>
            </section>
            <section className="quiz__entry">
              <h4>Which dosage strength fits your needs?</h4>
              <input
                type="radio"
                className="btn-check"
                name="dosage"
                id="dosage-starter"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-primary" htmlFor="dosage-starter">
                Starter Dosage
              </label>
              <input
                type="radio"
                className="btn-check"
                name="dosage"
                id="dosage-regular"
                autoComplete="off"
              />
              <label className="btn btn-primary" htmlFor="dosage-regular">
                Regular Strength
              </label>
              <input
                type="radio"
                className="btn-check"
                name="dosage"
                id="dosage-maximum"
                autoComplete="off"
              />
              <label className="btn btn-primary" htmlFor="dosage-maximum">
                Maximum Strength
              </label>
            </section>
            <div className="alert alert-danger" role="alert">
              Based on your answers, a treatment plan will be pre-selected for
              you. You may also choose a different plan that would&nbsp;better
              suit your needs.
            </div>
          </section>
          <section className="options">
            <h3 className="options__heading">Select An Option&nbsp;Below</h3>
            <input
              type="radio"
              className="btn-check"
              name="strength"
              id="maximum-strength"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn" htmlFor="maximum-strength">
              <img
                src="/img/pricing-1-inactive-pill.png"
                alt="Maximum Strength"
              />
            </label>
            <input
              type="radio"
              className="btn-check"
              name="strength"
              id="advanced-strength"
              autoComplete="off"
            />
            <label className="btn" htmlFor="advanced-strength">
              <img
                src="/img/pricing-2-inactive-pill.png"
                alt="Advanced Strength"
              />
            </label>
            <input
              type="radio"
              className="btn-check"
              name="strength"
              id="regular-strength"
              autoComplete="off"
            />
            <label className="btn" htmlFor="regular-strength">
              <img
                src="/img/pricing-3-inactive-pill.png"
                alt="Regular Strength"
              />
            </label>
          </section>
          <section className="order">
            <h3 className="order__heading">Start Your Order</h3>
            <form action="step-2.html" className="form validate" noValidate>
              <div className="card">
                <div className="card-header">
                  <em>Step 1:</em>
                  <span>Shipping Details</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="first-name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        name="first-name"
                        maxLength={50}
                        placeholder
                        defaultValue="John Doe"
                        required
                      />
                      <div className="invalid-feedback">
                        First name is required
                      </div>
                    </div>
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="last-name" className="form-label">
                        Last Name
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
                        Last name is required
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        maxLength={50}
                        placeholder
                        defaultValue
                        required
                      />
                      <div className="invalid-feedback">
                        Valid email address is required
                      </div>
                    </div>
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        maxLength={50}
                        placeholder
                        defaultValue
                        required
                      />
                      <div className="invalid-feedback">
                        Phone Number is required
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="address" className="form-label">
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        maxLength={50}
                        placeholder
                        defaultValue
                        required
                      />
                      <div className="invalid-feedback">
                        Street address is required
                      </div>
                    </div>
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        maxLength={50}
                        placeholder
                        defaultValue
                        required
                      />
                      <div className="invalid-feedback">City is required</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-md-6 mb-3">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="form-select"
                        required
                      >
                        <option value="usa" selected>
                          United States
                        </option>
                        <option value="de">Germany</option>
                        <option value="ca">Canada</option>
                      </select>
                      <div className="invalid-feedback">
                        Country is required
                      </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                      <label htmlFor="state" className="form-label">
                        State / Province
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
                      <div className="invalid-feedback">State is required</div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-2 col-lg-3 mb-4">
                      <label htmlFor="zip" className="form-label">
                        Zip Code
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
                      <div className="invalid-feedback">Zip is required</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12">
                      <button className="btn btn-primary" type="submit">
                        Continue to Step 2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p className="note">
              * These statements have not been evaluated by the Food and Drug
              Administration. <br />
              This product is not intended to diagnose, treat, cure, or prevent
              any disease.
            </p>
          </section>
        </article>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
              <figure className="footer__logo">
                <img
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
                <img
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
  );
}
