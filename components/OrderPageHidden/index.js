import Image from "next/image";
import Link from "next/link";
export default function Orders() {
  return (
    <div>
      <main className="page">
        <article className="container">
          <header className="order-hero">
            <div className="row">
              <div className="col col-12">
                <div className="order-hero__header">
                  {/* <figure className="order-hero__security">
                    <Image
                      src="/img/security-seals.png"
                      width={190}
                      height={32}
                      alt=""
                    />
                  </figure> */}
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
                  <Image
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
                      Had I known it was this easy and affordable to get Generic
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
                      <Image
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
                      <Image
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
                      <Image
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
                    <th>Zero Doctor&apos;s Fees</th>
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
                    <th>No doctor&apos;s Appointment Required</th>
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
                    <Image
                      className="/img-fluid"
                      src="/img/guarantee-satisfaction.webp"
                      width={160}
                      height={160}
                      alt=""
                    />
                  </figure>
                  <figure>
                    <Image
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
                  top-quality, Rx-strength Generic Viagra and Generic Cialis
                  shipped to your doorstep.
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
                      Viagra and Generic Cialis
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
              <Image
                src="/img/pricing-1-inactive-pill.png"
                alt="Maximum Strength"
                width={700}
                height={100}
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
              <Image
                src="/img/pricing-2-inactive-pill.png"
                alt="Advanced Strength"
                width={700}
                height={100}
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
              <Image
                src="/img/pricing-3-inactive-pill.png"
                alt="Regular Strength"
                width={700}
                height={100}
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
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="shippingState"
                        onChange={handleChange}
                        maxLength={50}
                        required
                      />

                      {/* <label htmlFor="state" className="form-label">
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
                      </select> */}
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
    </div>
  );
}
