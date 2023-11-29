import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect, React } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Col, Container, Button, Row } from "react-bootstrap";
import Axios from "axios";
import Router, { useRouter } from "next/router";
import AuthContext from "../../../store/auth-context";
export default function MembershipPlan() {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [medications, setMedications] = useState([{}]);
  const [chosenMed, setChosenMed] = useState({
    id: 1,
    product_title: "Viagra 25 mg, 4 day supply",
    product_tag: "Viagra",
    partner_medication_id: "eb37cfd0-6b3a-472f-8cf6-2bdd1a0c806a",
    product_dosage_tag: "beginner",
    product_dosage_mg: "25.0",
    product_dosages_per_month: 4,
    product_qty: 4,
    product_price: "280.00",
    product_image: "Viagra_25mg_4",
  });

  const [strong1, setStrong1] = useState([
    { name: "Begginer", value: "begginer" },
    { name: "Intermediate", value: "intermediate" },
    { name: "Strong", value: "strong" },
  ]);

  const [times, setTimes] = useState([
    { name: "4", value: 4 },
    { name: "8", value: 8 },
    { name: "12", value: 12 },
  ]);

  const returnObject = (value) => {
    let obj = {
      name: value,
      value: value,
    };

    return obj;
  };

  const gettingMedications = async () => {
    const route = "/api/get-products";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setMedications(res.data);
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
    gettingMedications();
    gettingOrderInfo();
  }, []);

  const gettingOrderInfo = async () => {
    const route = "/api/order/get-orders";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data.length);
          // if (res.data.length != 0) {
          //   router.push("/steps");
          // }
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
    findRightOne();
  }, [
    chosenMed.product_tag,
    chosenMed.product_dosages_per_month,
    chosenMed.product_dosage_tag,
  ]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setChosenMed({
      ...chosenMed,
      [name]: value,
    });
  };

  function findRightOne() {
    let similarStrong = [];
    let similarDosage = [];

    medications.find((element) => {
      if (element.product_tag === chosenMed.product_tag) {
        if (!similarStrong.includes(element.product_dosage_tag)) {
          similarStrong.push(element.product_dosage_tag);
        }

        if (element.product_dosage_tag === chosenMed.product_dosage_tag) {
          if (!similarDosage.includes(element.product_dosages_per_month)) {
            similarDosage.push(element.product_dosages_per_month);
          }
          if (
            element.product_dosages_per_month ==
            chosenMed.product_dosages_per_month
          ) {
            setChosenMed({
              ...chosenMed,
              product_price: element.product_price,
              id: element.id,
              partner_medication_id: element.partner_medication_id,
            });
          } else {
          }
        }
      } else {
      }
    });

    let objectMaking = [];
    let objectMakingTimes = [];
    similarStrong.forEach((object) => objectMaking.push(returnObject(object)));
    similarDosage.forEach((object) =>
      objectMakingTimes.push(returnObject(object))
    );

    setStrong1(objectMaking);
    setTimes(objectMakingTimes);
  }

  const backToCheckout = async (medicationId) => {
    const route = "/api/case/save-product";
    var currentProductId = { "product_id": medicationId };
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
        payload: currentProductId,
      })
        .then((res) => {
          router.push("/steps");
        })
        .catch((error) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
      className = "btn btn-primary";
    }
  };

  const medication = [
    { name: "Sildenafil (generic Viagra)", value: "Sildenafil" },
    // { name: "Viagra", value: "Viagra" },
    { name: "Tadalafil (generic Cialis)", value: "Tadalafil" },
    // { name: "Cialis", value: "Cialis" },
  ];
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
                    {/* <ul className="list-group membership__options-choose">
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="medications"
                          id="medication-1"
                          value="Viagra"
                          onChange={handleChange}
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
                          name="medications"
                          id="medication-2"
                          value="Sildenafil"
                          onChange={handleChange}
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
                          name="medications"
                          id="medication-3"
                          value="Cialis"
                          onChange={handleChange}
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
                          name="medications"
                          id="medication-4"
                          value="Tadalafil"
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="medication-4"
                        >
                          Tadalafil <span>$10 per dose</span>
                        </label>
                      </li>
                    </ul> */}
                    {medication.map((radio, idx) => (
                      <Col md={12} className="pb-2" key={idx}>
                        <ToggleButton
                          key={idx}
                          id={`radios-${idx}`}
                          type="radio"
                          name="product_tag"
                          className="btn btn-primary w-100"
                          value={radio.value}
                          checked={chosenMed.product_tag === radio.value}
                          onChange={handleChange}
                        >
                          {radio.name}
                        </ToggleButton>
                      </Col>
                    ))}
                    <p className="membership__options-title">
                      How strong per serving you think you need, select one:
                    </p>
                    {strong1.map((radio, idx) => (
                      <Col md={12} className="pb-2" key={idx}>
                        <ToggleButton
                          key={idx}
                          id={`radiod-${idx}`}
                          type="radio"
                          className="btn btn-primary w-100"
                          name="product_dosage_tag"
                          value={radio.value}
                          checked={chosenMed.product_dosage_tag === radio.value}
                          onChange={handleChange}
                        >
                          {radio.name}
                        </ToggleButton>
                      </Col>
                    ))}
                    {/* <ul className="list-group membership__options-choose">
                      <li className="list-group-item">
                        <input
                          type="radio"
                          className="btn-check"
                          name="serving"
                          asd
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
                    </ul> */}
                    <p className="membership__options-title">
                      How many times you believe you will take the medication
                      each month, select one:
                    </p>
                    {/* <ul className="list-group list-group-horizontal membership__options-choose">
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
                    </ul> */}
                    <Row>
                      {times.map((radio, idx) => (
                        <Col md={4} key={idx}>
                          <ToggleButton
                            key={idx}
                            id={`radioa-${idx}`}
                            type="radio"
                            name="product_dosages_per_month"
                            value={radio.value}
                            checked={
                              chosenMed.product_dosages_per_month ===
                              radio.value
                            }
                            onChange={handleChange}
                          >
                            {radio.name + " TIMES"}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </section>
                </div>
                <div className="col col-12 col-md-6">
                  <section className="membership__price">
                    {/* <h4>Your Price</h4>
                    <figure className="membership__price-image">
                      <Image
                        className="/img-fluid"
                        src="/img/bottle-viagra.jpg"
                        width={354}
                        height={450}
                        alt=""
                      />
                    </figure> */}
                    <div className="membership__price-content">
                      <p className="lead">
                        You chose <strong>{chosenMed.product_tag}</strong> at{" "}
                        <strong>{chosenMed.product_dosage_tag}</strong> level
                        for&nbsp;
                        <strong>{chosenMed.product_dosages_per_month}</strong> a
                        month
                      </p>
                      <p className="price">${chosenMed.product_price}</p>
                      <p className="note">
                        A physician will determine if this dosage is right for
                        you, or recommended a more appropriate dosage.
                      </p>
                      <Button
                        className="btn btn-secondary btn-lg"
                        onClick={() => {
                          backToCheckout(chosenMed.partner_medication_id);
                        }}
                      >
                        Save Preferences
                      </Button>
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
