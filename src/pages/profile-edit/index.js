import Image from "next/image";
export default function ProfileEdit() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <ul className="nav account-nav">
              <li className="nav-item">
                <Link className="nav-link" href="membership.html">
                  Membership
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="orders.html">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="profile.html">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="case.html">
                  Case
                </Link>
              </li>
            </ul>
            <div className="profile">
              <div className="row">
                <div className="col col-12 col-lg-5 col-xl-4">
                  <div className="profile__cell pe-lg-4">
                    <h4>Personal Information</h4>
                    <p className="h4">John Doe</p>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Email:</th>
                          <td>sample@gmail.com</td>
                        </tr>
                        <tr>
                          <th>Phone Number:</th>
                          <td>(516)286-0320</td>
                        </tr>
                        <tr>
                          <th>Date Of Birth:</th>
                          <td>June 01, 1982</td>
                        </tr>
                        <tr>
                          <th>Password:</th>
                          <td>********</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col col-12 col-lg-7 col-xl-8 ps-lg-5">
                  <section className="profile__cell">
                    <h4>Shipping Info</h4>
                    <p className="pre">
                      Ship To Name: Must be your legal name.
                    </p>
                    <form
                      action="profile.html"
                      className="form validate"
                      noValidate
                    >
                      <div className="row">
                        <div className="col col-12 col-xl-6 mb-4">
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
                            defaultValue="John"
                            required
                          />
                          <div className="invalid-feedback">
                            First name is required
                          </div>
                        </div>
                        <div className="col col-12 col-xl-6 mb-4">
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
                            defaultValue="Doe"
                            required
                          />
                          <div className="invalid-feedback">
                            Last name is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12 mb-4">
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
                            defaultValue="(516)286-0320"
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
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            maxLength={100}
                            placeholder
                            defaultValue="768 Woodbridge lane west"
                            required
                          />
                          <div className="invalid-feedback">
                            Address is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12 col-xl-4 mb-4">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <select
                            id="state"
                            name="state"
                            className="form-select"
                            required
                          >
                            <option value>State</option>
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
                            <option value="NY" selected>
                              New York
                            </option>
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
                        <div className="col col-6 col-xl-4 mb-4">
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
                            defaultValue="Wantagh"
                            required
                          />
                          <div className="invalid-feedback">
                            City is required
                          </div>
                        </div>
                        <div className="col col-6 col-xl-4 mb-4">
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
                            defaultValue={11793}
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
                            className="btn btn-primary d-block w-100"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </section>
                  <section className="profile__cell">
                    <h4>Billing Info</h4>
                    <form
                      action="profile.html"
                      className="form validate"
                      noValidate
                    >
                      <div className="row">
                        <div className="col col-12 col-xl-6 mb-4">
                          <label
                            htmlFor="billing-first-name"
                            className="form-label"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billing-first-name"
                            name="billing-first-name"
                            maxLength={50}
                            placeholder
                            defaultValue="John"
                            required
                          />
                          <div className="invalid-feedback">
                            First name is required
                          </div>
                        </div>
                        <div className="col col-12 col-xl-6 mb-4">
                          <label
                            htmlFor="billing-last-name"
                            className="form-label"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billing-last-name"
                            name="billing-last-name"
                            maxLength={50}
                            placeholder
                            defaultValue="Doe"
                            required
                          />
                          <div className="invalid-feedback">
                            Last name is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12 mb-4">
                          <label htmlFor="billing-phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="billing-phone"
                            name="billing-phone"
                            maxLength={50}
                            placeholder
                            defaultValue="(516)286-0320"
                            required
                          />
                          <div className="invalid-feedback">
                            Phone Number is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12 mb-4">
                          <label
                            htmlFor="billing-address"
                            className="form-label"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billing-address"
                            name="billing-address"
                            maxLength={100}
                            placeholder
                            defaultValue="768 Woodbridge lane west"
                            required
                          />
                          <div className="invalid-feedback">
                            Address is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12 col-xl-4 mb-4">
                          <label htmlFor="billing-state" className="form-label">
                            State
                          </label>
                          <select
                            id="billing-state"
                            name="billing-state"
                            className="form-select"
                            required
                          >
                            <option value>State</option>
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
                            <option value="NY" selected>
                              New York
                            </option>
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
                        <div className="col col-6 col-xl-4 mb-4">
                          <label htmlFor="billing-city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billing-city"
                            name="billing-city"
                            maxLength={50}
                            placeholder
                            defaultValue="Wantagh"
                            required
                          />
                          <div className="invalid-feedback">
                            City is required
                          </div>
                        </div>
                        <div className="col col-6 col-xl-4 mb-4">
                          <label htmlFor="billing-zip" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billing-zip"
                            name="billing-zip"
                            maxLength={5}
                            placeholder
                            defaultValue={11793}
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
                            className="btn btn-primary d-block w-100"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </section>
                  <section className="profile__cell">
                    <h4>Payment Info</h4>
                    <figure className="profile__payment">
                      <Image
                        className="/img-fluid"
                        src="/img/payment-methods-shadowv2.png"
                        width={358}
                        height={58}
                        alt=""
                      />
                    </figure>
                    <form
                      action="profile.html"
                      className="form validate"
                      noValidate
                    >
                      <div className="row">
                        <div className="col col-12 col-xl-6 mb-4">
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
                        <div className="col col-6 col-xl-3 mb-4">
                          <label htmlFor="cc-expiration" className="form-label">
                            Expiration&nbsp;Date
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-expiration"
                            name="cc-expiration"
                            maxLength={7}
                            placeholder="MM / YY"
                            defaultValue="03/26"
                            required
                          />
                          <div className="invalid-feedback">
                            Expiration date is required
                          </div>
                        </div>
                        <div className="col col-6 col-xl-3 mb-4">
                          <label htmlFor="cc-cvc" className="form-label">
                            Security&nbsp;Code
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="cc-cvc"
                            name="cc-cvc"
                            maxLength={3}
                            placeholder="CVC"
                            defaultValue={123}
                            required
                          />
                          <div className="invalid-feedback">
                            CVC is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12">
                          <button
                            className="btn btn-primary d-block w-100"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
