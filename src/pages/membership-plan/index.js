import Image from "next/image";
import Link from "next/link";
export default function MembershipPlan() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <div className="membership">
              <div className="row">
                <div className="col col-12 col-md-6">
                  <section className="membership__options">
                    <p className="membership__options-title">
                      First decide your preferred medication, select one:
                    </p>
                    <ul className="list-group membership__options-choose">
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="medication"
                          id="medication-1"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="medication-1"
                        >
                          Viagra <span>$70 per dose</span>
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="medication"
                          id="medication-2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="medication-2"
                        >
                          Sildenafil <span>$2 per dose</span>
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="medication"
                          id="medication-3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="medication-3"
                        >
                          Cialis <span>$34 per dose</span>
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="medication"
                          id="medication-4"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="medication-4"
                        >
                          Tadalafil <span>$10 per dose</span>
                        </label>
                      </li>
                    </ul>
                    <p className="membership__options-title">
                      How strong per serving you think you need, select one:
                    </p>
                    <ul className="list-group membership__options-choose">
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="serving"
                          id="serving-1"
                          autoComplete="off"
                        />
                        <label className="btn btn-primary" htmlFor="serving-1">
                          Beginner <span>25mg</span>
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="serving"
                          id="serving-2"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn btn-primary" htmlFor="serving-2">
                          Intermediate <span>50mg</span>
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="serving"
                          id="serving-3"
                          autoComplete="off"
                        />
                        <label className="btn btn-primary" htmlFor="serving-3">
                          Strong <span>100mg</span>
                        </label>
                      </li>
                    </ul>
                    <p className="membership__options-title">
                      How many times you believe you will take the medication
                      each month, select one:
                    </p>
                    <ul className="list-group list-group-horizontal membership__options-choose">
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="times"
                          id="times-4"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn btn-primary" htmlFor="times-4">
                          4 Doses
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="times"
                          id="times-8"
                          autoComplete="off"
                        />
                        <label className="btn btn-primary" htmlFor="times-8">
                          8 Doses
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="times"
                          id="times-12"
                          autoComplete="off"
                        />
                        <label className="btn btn-primary" htmlFor="times-12">
                          12 Doses
                        </label>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="col col-12 col-md-6">
                  <section className="membership__price">
                    <h4>Your Price</h4>
                    <figure className="membership__price-image">
                      <Image
                        className="/img-fluid"
                        src="/img/bottle-viagra.jpg"
                        width={354}
                        height={450}
                        alt=""
                      />
                    </figure>
                    <div className="membership__price-content">
                      <p className="lead">
                        You chose <strong>Viagra</strong> at{" "}
                        <strong>Intermediate</strong> level for&nbsp;
                        <strong>4&nbsp;Doses</strong> a month
                      </p>
                      <p className="price">$560.00</p>
                      <p className="note">
                        A physician will determine if this dosage is right for
                        you, or recommended a more appropriate dosage.
                      </p>
                      <a
                        href="membership.html"
                        className="btn btn-secondary btn-lg"
                      >
                        Save Preferences
                      </Link>
                    </div>
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
