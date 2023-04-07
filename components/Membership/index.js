import Image from "next/image";
import Link from "next/link";
import {
  Col,
  Container,
  FormSelect,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
export default function Membership() {
  const [UserInfo, setUserInfo] = useState("");
  const [Case, setCase] = useState({
    status: "",
    created_at: "",
    product: {
      product_dosages_per_month: "",
      product_title: "",
      product_tag: "",
    },
  });
  const authCtx = useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log("zajebao sam se");
        })
        .catch((error) => {
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  const getCase = async () => {
    const route = "/api/case/get-case";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setCase({
            status: res.data.status,
            created_at: res.data.created_at,
            product: {
              product_dosages_per_month:
                res.data.product.product_dosages_per_month,
              product_title: res.data.product_title,
              product_tag: res.data.product_tag,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCase();
    gettingUserInfo();
  }, []);
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
                      {/* <div className="col col-12 col-xl-6">
                        <figure className="membership__treatment-image">
                          <Image
                            className="/img-fluid"
                            src="/img/bottle-viagra.jpg"
                            width={318}
                            height={404}
                            alt=""
                          />
                        </figure>
                      </div> */}
                      <div className="col col-12 col-xl-6">
                        <div className="membership__treatment-content">
                          <p className="h5">
                            Viagra®{Case.product.product_tag}
                          </p>
                          <p className="lead">
                            Sildenafil Citrate{Case.product.product_title}
                          </p>
                          <p>
                            <strong>
                              60mg
                              <br />
                              {Case.product.product_dosages_per_month} doses per
                              month
                              <br />
                            </strong>
                          </p>
                          <Link
                            href="/membership-plan"
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
                        {/* <tr>
                          <th>ID Verification:</th>
                          <td>{UserInfo.verification_status}</td>
                        </tr> */}
                        <tr>
                          <th>Medical Status:</th>
                          <td>{Case.status}</td>
                        </tr>
                        <tr>
                          <th>Created:</th>
                          <td>{Case.created_at}</td>
                        </tr>
                        <tr>
                          <th>Subscription&nbsp;Status:</th>
                          <td>Pending</td>
                        </tr>
                        {/* <tr>
                          <th>Delivery:</th>
                          <td>Every 30 days</td>
                        </tr>
                        <tr>
                          <th>Auto Renewal Date:</th>
                          <td>10-01-2022</td>
                        </tr> */}
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
