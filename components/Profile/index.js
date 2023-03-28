import Image from "next/image";
export default function Profile() {
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
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
                    <Link href="profile-edit.html" className="edit">
                      Edit
                    </Link>
                    <h4>Shipping Info</h4>
                    <p className="h5">John Doe</p>
                    <p>
                      (516)286-0320 <br />
                      768 Woodbridge lane west <br />
                      Wantagh, NY, 11793
                    </p>
                  </section>
                  <section className="profile__cell">
                    <Link href="profile-edit.html" className="edit">
                      Edit
                    </Link>
                    <h4>Billing Info</h4>
                    <p className="h5">John Doe</p>
                    <p>
                      768 Woodbridge lane west <br />
                      Wantagh, NY, 11793
                    </p>
                  </section>
                  <section className="profile__cell">
                    <Link href="profile-edit.html" className="edit">
                      Edit
                    </Link>
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
                    <table className="table table-striped table-card">
                      <tbody>
                        <tr>
                          <th>Card Number:</th>
                          <td>5474********8652</td>
                        </tr>
                        <tr>
                          <th>Expiry Date:</th>
                          <td>01/26</td>
                        </tr>
                        <tr>
                          <th>CVC:</th>
                          <td>****</td>
                        </tr>
                      </tbody>
                    </table>
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
