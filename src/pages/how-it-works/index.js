import Image from "next/image";
import Link from "next/link";
export default function HowItWorks() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <header className="hero">
              <div className="row align-items-md-center">
                <div className="col col-12 col-md-8">
                  <div className="hero__content">
                    <h3 className="hero__heading">How LionsPrideRx Works</h3>
                    <p>
                      LionsPrideRx works with US-licensed physicians who
                      evaluate customer health criteria and authorize valid
                      e-prescriptions for E.D. medication. All medications
                      purchased through LionsPrideRx are 100% genuine
                      FDA-approved medication and are managed, distributed, and
                      shipped by&nbsp;US-based pharmacies.
                    </p>
                  </div>
                </div>
                <div className="col col-12 col-md-4">
                  <figure className="hero__picture">
                    <Image
                      src="/img/how-it-works.png"
                      width={260}
                      height={260}
                      alt=""
                      className="/img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </header>
            <hr />
            <section className="how-steps">
              <div className="row">
                <div className="col col-12">
                  <h3 className="how-steps__heading">
                    Simple, Easy, and Affordable E.D. Treatments
                    with&nbsp;LionsPrideRx
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col col-12 col-md-6 col-xl-3">
                  <article className="card">
                    <div className="card-body">
                      <figure className="card-image">
                        <Image
                          className="/img-fluid"
                          src="/img/icon-step-1.png"
                          width={160}
                          height={160}
                          alt=""
                        />
                        <figcaption>Step 1</figcaption>
                      </figure>
                      <h5 className="card-title">
                        Generic Viagra or Generic Cialis?
                      </h5>
                      <p className="card-text">
                        Select your preferred ED medication. Affordable E.D.
                        medication starts at only $2/pill. Pay only for your
                        medication – no hidden charges!
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-xl-3">
                  <article className="card">
                    <div className="card-body">
                      <figure className="card-image">
                        <Image
                          className="/img-fluid"
                          src="/img/icon-step-2.png"
                          width={160}
                          height={160}
                          alt=""
                        />
                        <figcaption>Step 2</figcaption>
                      </figure>
                      <h5 className="card-title">
                        Fill out a simple health survey
                      </h5>
                      <p className="card-text">
                        Our simple health survey asks for relevant health
                        details that would help determine which treatment is
                        right for you. Expect US-licensed physicians to review
                        your shared health details in under 24 hours.
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-xl-3">
                  <article className="card">
                    <div className="card-body">
                      <figure className="card-image">
                        <Image
                          className="/img-fluid"
                          src="/img/icon-step-3.png"
                          width={160}
                          height={160}
                          alt=""
                        />
                        <figcaption>Step 3</figcaption>
                      </figure>
                      <h5 className="card-title">
                        Choose your preferred treatment plan
                      </h5>
                      <p className="card-text">
                        LionsPrideRx offers affordable treatment plans for every
                        budget and&nbsp;lifestyle.
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-xl-3">
                  <article className="card">
                    <div className="card-body">
                      <figure className="card-image">
                        <Image
                          className="/img-fluid"
                          src="/img/icon-step-4.png"
                          width={160}
                          height={160}
                          alt=""
                        />
                        <figcaption>Step 4</figcaption>
                      </figure>
                      <h5 className="card-title">Complete your order</h5>
                      <p className="card-text">
                        If approved, expect your E.D. medication to be delivered
                        within 3-5 business days!
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="row">
                <div className="col col-12 text-center">
                  <Link href="/register" className="btn btn-primary btn-lg">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
