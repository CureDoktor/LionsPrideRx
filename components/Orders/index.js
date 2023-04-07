import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
export default function Orders() {
  const authCtx = useContext(AuthContext);
  const [Orders, setOrders] = useState([
    {
      "amount": 0,
      "cardNumber": "",
      "created_at": "",
      "creditCardType": "",
      "id": 1,
      "product_title": "",
      "status": "",
      "transactionNumber": null,
    },
  ]);
  const gettingOrderInfo = async () => {
    const route = "/api/order/get-orders";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data);
          setOrders(res.data);
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
    gettingOrderInfo();
  }, []);
  return (
    <>
      <div>
        <main className="page">
          <article className="container">
            <div className="account-table">
              <table className="table table-striped table-desktop">
                <tbody>
                  <tr>
                    <th>Transaction&nbsp;No.:</th>
                    <th>Product Name&nbsp;&amp;&nbsp;Qty:</th>
                    <th>CC Type:</th>
                    <th>Amount:</th>
                    <th>Status:</th>

                    <th>Created&nbsp;At:</th>
                  </tr>
                  {Orders.map((element) => {
                    return (
                      <tr key={element.transactionNumber}>
                        <td>{element.transactionNumber}</td>
                        <td>{element.product_title}</td>
                        <td>{element.creditCardType}</td>
                        <td>${element.amount}</td>
                        <td>{element.status}</td>
                        <td>{element.created_at}</td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td>43612243719</td>
                    <td>Sildenafil 60 mg, 12 days supply x1</td>
                    <td>Mastercard</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>out_for_delivery</td>
                    <td>92001901755477300054169421</td>
                    <td>2022-09-01 &nbsp;|&nbsp; 16:03:02</td>
                  </tr> */}
                </tbody>
              </table>
              <div className="tables-mobile">
                <div className="entry">
                  <table className="table table-mobile">
                    <tbody>
                      <tr>
                        <th style={{ width: "40%" }}>Transaction No.:</th>
                        <td>43612243719</td>
                      </tr>
                      <tr>
                        <th>Product Name &amp; Qty:</th>
                        <td>Sildenafil 60 mg, 12 days supply x1</td>
                      </tr>
                      <tr>
                        <th>CC Type:</th>
                        <td>Mastercard</td>
                      </tr>
                      <tr>
                        <th>Amount:</th>
                        <td>$72.00</td>
                      </tr>
                      <tr>
                        <th>Status:</th>
                        <td>Confirmed</td>
                      </tr>
                      <tr>
                        <th>Shipping:</th>
                        <td>out_for_delivery</td>
                      </tr>
                      <tr>
                        <th>Tracking Number:</th>
                        <td className="text-break">
                          92001901755477300054169421
                        </td>
                      </tr>
                      <tr>
                        <th>Created At:</th>
                        <td>2022-09-01 &nbsp;|&nbsp; 16:03:02</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="entry">
                  <table className="table table-mobile">
                    <tbody>
                      <tr>
                        <th style={{ width: "40%" }}>Transaction No.:</th>
                        <td>43612243719</td>
                      </tr>
                      <tr>
                        <th>Product Name &amp; Qty:</th>
                        <td>Sildenafil 60 mg, 12 days supply x1</td>
                      </tr>
                      <tr>
                        <th>CC Type:</th>
                        <td>Mastercard</td>
                      </tr>
                      <tr>
                        <th>Amount:</th>
                        <td>$72.00</td>
                      </tr>
                      <tr>
                        <th>Status:</th>
                        <td>Confirmed</td>
                      </tr>
                      <tr>
                        <th>Shipping:</th>
                        <td>out_for_delivery</td>
                      </tr>
                      <tr>
                        <th>Tracking Number:</th>
                        <td className="text-break">
                          92001901755477300054169421
                        </td>
                      </tr>
                      <tr>
                        <th>Created At:</th>
                        <td>2022-09-01 &nbsp;|&nbsp; 16:03:02</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="entry">
                  <table className="table table-mobile">
                    <tbody>
                      <tr>
                        <th style={{ width: "40%" }}>Transaction No.:</th>
                        <td>43612243719</td>
                      </tr>
                      <tr>
                        <th>Product Name &amp; Qty:</th>
                        <td>Sildenafil 60 mg, 12 days supply x1</td>
                      </tr>
                      <tr>
                        <th>CC Type:</th>
                        <td>Mastercard</td>
                      </tr>
                      <tr>
                        <th>Amount:</th>
                        <td>$72.00</td>
                      </tr>
                      <tr>
                        <th>Status:</th>
                        <td>Confirmed</td>
                      </tr>
                      <tr>
                        <th>Shipping:</th>
                        <td>out_for_delivery</td>
                      </tr>
                      <tr>
                        <th>Tracking Number:</th>
                        <td className="text-break">
                          92001901755477300054169421
                        </td>
                      </tr>
                      <tr>
                        <th>Created At:</th>
                        <td>2022-09-01 &nbsp;|&nbsp; 16:03:02</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
