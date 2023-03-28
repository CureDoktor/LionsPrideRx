import Image from "next/image";
import Link from "next/link";
export default function Membership() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <div className="membership">
              <div className="row">
                <div className="col col-12 col-md-6">
                  <section className="membership__treatment">
                    <h4>Treatment</h4>
                    <div className="row align-items-lg-center">
                      <div className="col col-12 col-xl-6">
                        <figure className="membership__treatment-image">
                          <Image
                            className="/img-fluid"
                            src="/img/bottle-viagra.jpg"
                            width={318}
                            height={404}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col col-12 col-xl-6">
                        <div className="membership__treatment-content">
                          <p className="h5">Viagra®</p>
                          <p className="lead">Sildenafil Citrate</p>
                          <p>
                            <strong>
                              60mg
                              <br />
                              12 doses <br />
                              3x per week
                            </strong>
                          </p>
                          <Link
                            href="membership-plan.html"
                            className="btn btn-primary btn-lg"
                          >
                            Switch Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col col-12 col-md-6">
                  <section className="membership__status">
                    <h4>Status</h4>
                    <div className="text-center">
                      <span className="badge rounded-pill text-bg-success">
                        Active
                      </span>
                    </div>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>Order Status:</th>
                          <td>Confirmed</td>
                        </tr>
                        <tr>
                          <th>ID Verification:</th>
                          <td>Verification Sent</td>
                        </tr>
                        <tr>
                          <th>Medical Status:</th>
                          <td>Completed</td>
                        </tr>
                        <tr>
                          <th>Created:</th>
                          <td>09-01-2022 | 16:00:52</td>
                        </tr>
                        <tr>
                          <th>Subscription&nbsp;Status:</th>
                          <td>Active</td>
                        </tr>
                        <tr>
                          <th>Delivery:</th>
                          <td>Every 30 days</td>
                        </tr>
                        <tr>
                          <th>Auto Renewal Date:</th>
                          <td>10-01-2022</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center">
                      <Link href="#" className="btn btn-secondary btn-lg">
                        Stop Subscription
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
