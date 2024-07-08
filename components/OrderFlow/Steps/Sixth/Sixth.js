import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
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
import styles from "./styles.module.scss";
import Radio from "./components/Radio";
import AuthContext from "../../../../store/auth-context";
import discountIcon from "@public/img/discount-icon.png";
import lockIcon from "@public/img/lock-icon-v2.png";
import cardIcon from "@public/img/card-icon.png";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";

const Card = ({ setCurrentStep }) => {
  const router = useRouter();
  const [selectedProductId, setSelectedProductId] = useState();
  const [whichProduct, setWhichProduct] = useState("");
  const [initialRender, setInitialRender] = useState(true);
  const [medications, setMedications] = useState([
    {
      id: 37,
      product_type: 1,
      pharmacy: "GENRX",
      product_title: "Tadalafil 20mg - 48 tablets every 12 months",
      product_tag: "Tadalafil",
      product_category: 1,
      partner_medication_id: "6d8a53e9-1121-4dce-8c57-04d57a43cb1f",
      product_dosage_tag: "Advanced",
      product_dosage_mg: "20.0",
      product_dosages_per_month: 4,
      product_qty: 48,
      days_supply: 365,
      refills: 0,
      one_time_charge: 0,
      initial_product_price: null,
      product_price: "468.00",
      product_image: "",
      metadata: [
        {
          name: "Monthly",
          value: "39",
        },
        {
          name: "Retail Price",
          value: "540",
        },
        {
          name: "% Saving",
          value: "13%",
        },
      ],
      is_active: 0,
    },
  ]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [chosingProduct, setChosingProduct] = useState([
    {
      id: 37,
      product_type: 1,
      pharmacy: "GENRX",
      product_title: "Tadalafil 20mg - 48 tablets every 12 months",
      product_tag: "Tadalafil",
      product_category: 1,
      partner_medication_id: "6d8a53e9-1121-4dce-8c57-04d57a43cb1f",
      product_dosage_tag: "Advanced",
      product_dosage_mg: "20.0",
      product_dosages_per_month: 4,
      product_qty: 48,
      days_supply: 365,
      refills: 0,
      one_time_charge: 0,
      initial_product_price: null,
      product_price: "468.00",
      product_image: "",
      metadata: [
        {
          name: "Monthly",
          value: "39",
        },
        {
          name: "Retail Price",
          value: "540",
        },
        {
          name: "% Saving",
          value: "13%",
        },
      ],
      is_active: 0,
    },
  ]);

  const gettingMedications = async () => {
    const route = "/api/get-products";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setMedications(res?.data?.data);
        })
        .catch((error) => {
          alert(error);
        });
    } catch (err) {
      alert("Something went wrongggg!" + err);
    }
  };
  useEffect(() => {
    // if (initialRender) {
    //   setInitialRender(false);
    //   return;
    // }
    var productArray = [];
    var product = {
      viagra: localStorage.getItem("viagra"),
      daily: localStorage.getItem("daily"),
      times_per_month: localStorage.getItem("times"),
    };

    if (product.viagra == "true") {
      var viagra = "Sildenafil (oral - tablet)";
    } else {
      var viagra = "Tadalafil (oral - tablet)";
    }
    if (product.daily == "true") {
      var times = "Daily";
    } else {
      var times = "Advanced";
    }
    if (viagra == "Sildenafil (oral - tablet)") {
      if (times == "Advanced") {
        var dosage = "100.0";
        setWhichProduct("Generic Viagra 100mg");
      }
    } else {
      if (times == "Advanced") {
        var dosage = "20.0";
        setWhichProduct("Generic Cialis 20mg");
      } else {
        var dosage = "5.0";
        setWhichProduct("Generic Cialis 5mg");
      }
    }

    medications.map((element) => {
      if (element.product_dosages_per_month == product.times_per_month) {
        if (element.product_tag == viagra) {
          if (element.product_dosage_tag == times) {
            if (times == "Daily") {
              productArray.push(element);
            } else {
              if (element.product_dosage_mg == dosage) {
                productArray.push(element);
              }
            }
          }
        }
      }
    });

    setChosingProduct(productArray);
  }, [medications]);

  useEffect(() => {
    gettingMedications();
  }, []);

  const authCtx = useContext(AuthContext);

  const [chosenMed, setChosenMed] = useState({
    monthly: "",
    retail_price: "",
    saving: "",
    plan_name: "",
    actial_pricee: 0,
    id: 0,
  });

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updatePaymentInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          handleOrderFromProfile();
        })
        .catch((error) => {
          const cure = error.response.data;
          const rest = Object.values(cure);
          var values = "";
          rest.map((element) => {
            values = values + element + " ";
          });

          return alert(values);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  const handleProductChange = (event) => {
    setSelectedProductId(event.target.value);

    const { value, name } = event.target;
    medications.map((element) => {
      if (element.id == value) {
        var monthlyy = 0;
        var retail_pricee = 0;
        var savingg = 0;
        var actual_pricee = element.product_price;
        var elementId = element.id;
        if (Array.isArray(element?.metadata)) {
          element.metadata.map((param) => {
            if (param.name === "Monthly") {
              monthlyy = param.value;
            } else if (param.name === "Retail Price") {
              retail_pricee = param.value;
            } else if (param.name === "% Saving") {
              savingg = param.value;
            }
          });
        }

        element.product_price;

        var plan_namee = "";
        if (element.product_qty / element.product_dosages_per_month == 1) {
          plan_namee = "1 Month";
        } else if (
          element.product_qty / element.product_dosages_per_month ==
          3
        ) {
          plan_namee = "3 Months";
        } else if (
          element.product_qty / element.product_dosages_per_month ==
          6
        ) {
          plan_namee = "6 Months";
        } else if (
          element.product_qty / element.product_dosages_per_month ==
          12
        ) {
          plan_namee = "12 Months";
        }

        var cure = {
          id: elementId,
          monthly: monthlyy,
          actual_price: actual_pricee,
          retail_price: retail_pricee,
          saving: savingg,
          plan_name: plan_namee,
        };

        // try {
        //   klaviyo.push(["track", "Product Changed", cure]);
        // } catch {}

        setChosenMed(cure);
      }
    });
  };

  async function handleOrderFromProfile() {
    const route = "/api/order/order-from-profile";
    const data = {
      product_id: chosenMed.id,
      case_id: parseInt(authCtx.Case()),
      // ad_group_id: searchParams.get("adgroupid")
      //   ? searchParams.get("adgroupid")
      //   : "",
      // keyword: searchParams.get("keyword") ? searchParams.get("keyword") : "",
      // utm_campaign: searchParams.get("utm_campaign")
      //   ? searchParams.get("utm_campaign")
      //   : "",
      // utm_content: searchParams.get("utm_content")
      //   ? searchParams.get("utm_content")
      //   : "",
      // campaignId: searchParams.get("campaignId")
      //   ? searchParams.get("campaignId")
      //   : "",
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), data })
        .then((res) => {
          // try {
          //   klaviyo.push(["track", "Completed Order Form", chosenMed]);
          // } catch {}
          // handleClose();
          // onNext();
          router.push("/profile");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  const [formData, setFormData] = useState({
    payment_processor: "credit_card",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const nameMap = {
    cialis: "Cialis",
    viagra: "Viagra",
  };
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>
          {/* Generic {nameMap[product.type]} 100mg {product.amount} doses */}
        </h1>
      </div>
      <div className={styles.form}>
        <h2>Choose shipping frequency</h2>
        <div className={styles.frequency}>
          <Form.Group as={Col} controlId="formGridSexualActivity">
            {/* {chosingProduct && chosingProduct.length > 0 && (
              <Form.Label>
                First decide your preferred medication, select one:
              </Form.Label>
            )} */}

            {chosingProduct.map((element, index) => {
              var monthlyCost = 0;

              if (Array.isArray(element?.metadata)) {
                element.metadata.map((metadata) => {
                  if (metadata.name === "Monthly") {
                    monthlyCost = metadata.value;
                  }
                });
              }
              var plan_name = "";
              if (
                element.product_qty / element.product_dosages_per_month ==
                1
              ) {
                plan_name = "1 Month";
              } else if (
                element.product_qty / element.product_dosages_per_month ==
                3
              ) {
                plan_name = "3 Months";
              } else if (
                element.product_qty / element.product_dosages_per_month ==
                6
              ) {
                plan_name = "6 Months";
              } else if (
                element.product_qty / element.product_dosages_per_month ==
                12
              ) {
                plan_name = "12 Months";
              }

              return (
                <div key={element.id}>
                  <Col md={12}>
                    <div className={styles.mainCardsContainer}>
                      <label
                        htmlFor={`radios-${element.id}`}
                        style={{ width: "100%" }}
                      >
                        <input
                          key={element.id}
                          id={`radios-${element.id}`}
                          type="radio"
                          name="product_tag"
                          value={element.id}
                          style={{ display: "none" }}
                          className={styles.inputCard}
                          checked={selectedProductId == element.id}
                          onChange={handleProductChange}
                        />
                        <div key={element.id} className={styles.card}>
                          <span>{plan_name}</span>
                          <span>${monthlyCost}/mo</span>
                        </div>
                      </label>
                    </div>
                  </Col>
                </div>
              );
            })}
          </Form.Group>
        </div>
        <div className={styles.discount}>
          <div className={styles.row}>
            <span>{chosenMed.plan_name} supply</span>
            <div className={styles.row}>
              <span className={styles.dashed}>${chosenMed.retail_price}</span>
              <span>${chosenMed.actual_price}</span>
            </div>
          </div>
          <div className={styles.row}>
            <span>Doctor fee waived</span>
            <div className={styles.row}>
              <Image src={discountIcon} alt="" width={20} height={16} />
              <span className={`${styles.red}`}>
                -${chosenMed.retail_price - chosenMed.actual_price}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.row}>
            <span style={{ fontWeight: 800 }}>Total</span>
            <div className={styles.row}>
              {/* <span className={styles.dashed}>${chosenMed.retail_price}</span> */}
              <span>${chosenMed.actual_price}</span>
            </div>
          </div>
          {/* <p>You&apos;re saving {chosenMed.saving}</p> */}
        </div>
        <div className={styles.refund}>
          <div className={styles.row}>
            <span>Full refund if not prescribed</span>
          </div>
          <p>Details</p>
        </div>
        <div className={styles.fields}>
          <div className={styles.credit}>
            <div>
              <Image src={cardIcon} alt="" width={29} height={19} />
              <span>Credit or Debit Card</span>
            </div>
            <Image src={lockIcon} alt="" width={18} height={22} />
          </div>
        </div>

        <br />
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="creditCardNumber">
            <Form.Control
              required
              name="creditCardNumber"
              type="text"
              maxLength="16"
              onChange={handleChange}
              placeholder="Enter Credit Card Number"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Credit Card Number
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="expirationDate">
            <Form.Control
              required
              name="expirationDate"
              type="text"
              onChange={handleChange}
              placeholder="exp. MM/DD"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Expiration Date
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="cvv">
            <Form.Control
              required
              name="cvv"
              type="text"
              maxLength="4"
              autoComplete="on"
              onChange={handleChange}
              placeholder="Enter CVV"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect CVV
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button onClick={submitHandler} className={styles.button}>
          Submit Order
        </Button>
      </div>
    </div>
  );
};

const Sixth = ({ product, setCurrentStep }) => {
  return (
    <Container className={styles.container}>
      <Card product={product} setCurrentStep={setCurrentStep} />
      <p className={styles.disclaimer}>
        By checking out, you agree that you will be charged $x.xx now for your
        first shipment, and $x.xx automatically every X months thereafter until
        you cancel through your account or call to cancel. You may cancel your
        subscription any time at least 48 hours before your next scheduled
        shipment. Your first shipment will ship after your provider reviews and
        writes a prescription, if approved.
      </p>
    </Container>
  );
};

export default Sixth;
