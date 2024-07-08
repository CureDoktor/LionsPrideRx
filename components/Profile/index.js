import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
import BillInfo from "../BillInfo";
import ShipInfo from "../ShipInfo";
import PayInfo from "../PayInfo";
import styles from "./styles.module.scss";
export default function Profile() {
  const authCtx = useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    gettingUserInfo();
  }, []);

  const [shipInfo, setShipInfo] = useState(false);
  const [billInfo, setBillInfo] = useState(false);
  const [payInfo, setPayInfo] = useState(false);

  const saveEnable = () => {
    // setSave(true);
  };

  const [userInfo, setUserInfo] = useState({
    auth_customer_payment_id: null,
    auth_customer_profile_id: null,
    billingAddress: null,
    billingCityId: null,
    billingCityName: null,
    billingFirstName: null,
    billingLastName: null,
    billingSameAsShipping: null,
    billingState: null,
    billingZip: null,
    creditCardNumber: null,
    cvv: null,
    date_of_birth: null,
    email_notification: null,
    expirationDate: null,
    firstName: " ",
    id: 1,
    lastName: " ",
    patient_id: null,
    payment_processor: null,
    phone: "",
    shippingAddress: "",
    shippingCityId: "",
    shippingCityName: "",
    shippingMethod: null,
    shippingState: "",
    shippingZip: "",
    sms_notification: null,
    user_id: 2,
    verification_job_id: null,
    verification_status: null,
    verification_token: null,
  });
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
                    <p className="h4">
                      {userInfo.firstName} {userInfo.lastName}
                    </p>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Email:</th>
                          <td>sample@gmail.com</td>
                        </tr>
                        <tr>
                          <th>Phone Number:</th>
                          <td>{userInfo.phone}</td>
                        </tr>
                        <tr>
                          <th>Date Of Birth:</th>
                          <td>{userInfo.date_of_birth}</td>
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
                    {/* <button
                      className={"edit " + styles.edit}
                      onClick={() => {
                        setShipInfo(!shipInfo);
                      }}
                    >
                      Edit
                    </button>
                    <h4>Shipping Info</h4>
                    <p className="h5">
                      {userInfo.firstName} {userInfo.lastName}
                    </p>
                    <p>
                      {userInfo.shippingAddress} <br />
                      {userInfo.shippingCityName} <br />
                      {userInfo.shippingState} {userInfo.shippingZip}
                    </p> */}

                    <ShipInfo reloadInfo={gettingUserInfo} info={userInfo} />
                  </section>
                  <section className="profile__cell">
                    {/* <button
                      className={"edit " + styles.edit}
                      onClick={() => {
                        setBillInfo(!billInfo);
                      }}
                    >
                      Edit
                    </button>
                    <h4>Billing Info</h4>
                    <p className="h5">
                      {userInfo.firstName} {userInfo.lastName}
                    </p>
                    <p>
                      {userInfo.billingAddress} <br />
                      {userInfo.billingCityName} <br />
                      {userInfo.billingState} {userInfo.billingZip}
                    </p> */}

                    <BillInfo reloadInfo={gettingUserInfo} info={userInfo} />
                  </section>
                  <section className="profile__cell">
                    {/* <button
                      onClick={() => {
                        setPayInfo(!payInfo);
                      }}
                      className={"edit " + styles.edit}
                    >
                      Edit
                    </button>
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
                          <td>{userInfo.creditCardNumber}</td>
                        </tr>
                        <tr>
                          <th>Expiry Date:</th>
                          <td>{userInfo.expirationDate}</td>
                        </tr>
                        <tr>
                          <th>CVC:</th>
                          <td>{userInfo.cvv}</td>
                        </tr>
                      </tbody>
                    </table> */}

                    <PayInfo reloadInfo={gettingUserInfo} info={userInfo} />
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
