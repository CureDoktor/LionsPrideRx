import React, { useState, useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import arrowSrc from "@public/img/product-landing/carousel-arrow.png";
import Form from "react-bootstrap/Form";
import { PencilFill } from "react-bootstrap-icons";
import AuthContext from "../../../../store/auth-context";
import Axios from "axios";
import {
  Col,
  Container,
  FormSelect,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";

const Fifth = ({ setCurrentStep }) => {
  const [country, setCountry] = useState(true);
  const [shipInfo, setShipInfo] = useState(false);
  const [wrongStateHolder, setWrongStateHolder] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  const [states, setStates] = useState([
    {
      "abbreviation": "NE",
      "name": "Nebraska",
      "state_id": "782679a1-8679-4ac9-a0e4-92226b4a2f67",
      "message": "",
      "is_active": 1,
    },
  ]);

  useEffect(() => {
    getStates();
  }, []);

  const checkCountry = (event) => {
    const { value, name } = event.target;
    console.log(value);
    if (value === "AK" || value === "MS" || value === "NM" || value === "SC") {
      setEnableButton(false);
      setCountry(false);
      handleChange(event);
    } else {
      setCountry(true);
      setEnableButton(true);
      handleChange(event);
    }
  };

  const getStates = async () => {
    const route = "/api/states";
    try {
      const rese = await Axios.post(route)
        .then((res) => {
          setStates(
            res.data.data.sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          );
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name == "shippingState" && value.match(/AL/gi)) {
      setWrongStateHolder(true);
    } else if (name == "shippingState") {
      setWrongStateHolder(false);
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    shippingAddress: "",
    shippingCityName: "",
    shippingState: "",
    shippingZip: "",
    phone: "",
  });

  const authCtx = useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  async function submitHandler(event) {
    console.log("akojdiwajidwuj");
    event.preventDefault();
    const route = "/api/user/updateShippingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          setCurrentStep((s) => s + 1);
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
  return (
    <Container className={styles.container}>
      <div>
        <h1>Shipping Info & Address</h1>
      </div>

      <Row className="mb-3 pt-5">
        <Form.Group as={Col} controlId="firstName">
          <Form.Control
            required
            name="firstName"
            type="text"
            onChange={handleChange}
            placeholder="First Name"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="lastName">
          <Form.Control
            required
            name="lastName"
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Last Name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="phone">
          <Form.Control
            required
            name="phone"
            type="text"
            onChange={handleChange}
            placeholder="Enter Phone Number"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Phone Number
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="shippingAddress">
          <Form.Control
            required
            name="shippingAddress"
            type="text"
            onChange={handleChange}
            placeholder="Enter Street Address"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Street Address
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="shippingCityName">
          <Form.Control
            required
            name="shippingCityName"
            type="text"
            onChange={handleChange}
            placeholder="Enter City"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect City
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group>
          <div>
            <Form.Select
              className={styles.formControl}
              value={formData.shippingState}
              name="shippingState"
              onChange={checkCountry}
            >
              {states.map((state) => {
                return (
                  <option
                    key={state.abbreviation}
                    value={`${state.abbreviation}`}
                  >
                    {state.name}
                  </option>
                );
              })}
            </Form.Select>

            {!country && (
              <small style={{ color: "red" }}>
                Unfortunately our services are not offered in this state. We
                hope to change that in the near future.
              </small>
            )}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Group as={Col} controlId="shippingZip">
            <Form.Control
              required
              name="shippingZip"
              type="text"
              onChange={handleChange}
              placeholder="Enter Zipcode"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Zipcode
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Group>
      </Row>
      <Button
        type="submit"
        disabled={!enableButton}
        onClick={submitHandler}
        className={styles.button}
      >
        SAVE AND CONTINUE
      </Button>
    </Container>
  );
};

export default Fifth;
