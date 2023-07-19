import React from "react";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
export default function Terms(props) {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-12 col-lg-10 col-xl-9 col-xxl-8 pt-5 mt-5">
            <h2>Frequently Asked Questions</h2>
            <Accordion
              style={{ background: "none" }}
              defaultActiveKey="0"
              flush
            >
              <Accordion.Item style={{ background: "none" }} eventKey="0">
                <Accordion.Header style={{ background: "none" }}>
                  What is LionsPrideRx?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPrideRx is an online portal that connects you to
                  US-licensed physicians and partner online pharmacies in the US
                  to legally purchase FDA-approved E.D. treatments, shipped
                  discreetly to your home. LionsPrideRx offers generic and
                  branded E.D. medications such as Viagra and Cialis to give you
                  a wide range of choices to help you manage E.D. effectively.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="1">
                <Accordion.Header>
                  {" "}
                  Can you purchase Viagra and Cialis without a prescription?
                </Accordion.Header>
                <Accordion.Body>
                  E.D. medication can only be purchased with a valid
                  prescription. LionsPrideRx acts as a bridge between customers
                  and US-licensed physicians who would evaluate their health and
                  provide valid e-Prescriptions to purchase E.D. medication
                  legally through LionsPrideRx.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="2">
                <Accordion.Header>
                  {" "}
                  How much Viagra should I take?
                </Accordion.Header>
                <Accordion.Body>
                  Your dosage of Viagra or Sildenafil Citrate would depend on
                  your doctor’s prescription. The average dosage for Viagra and
                  Sildenafil Citrate is 50mg. You may be given a lower dosage to
                  help lessen the risk of side effects, and you may also be
                  given a much higher dosage to improve the effectiveness of the
                  treatment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="3">
                <Accordion.Header>Are e-Prescriptions valid?</Accordion.Header>
                <Accordion.Body>
                  Yes. E-prescriptions are prescriptions from physicians who
                  examined and/or evaluated a patient without being physically
                  present to examine the patient. Pharmacies in the United
                  States are allowed to dispense prescription medication through
                  valid e-Prescriptions issued by US-licensed physicians.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="4">
                <Accordion.Header>
                  {" "}
                  How does LionsPrideRx’s treatment plan work?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPrideRx provides a wide selection of treatment plans
                  based on your prescribed medication, lifestyle, and budget.
                  Through LionsPrideRx, you can replenish your prescription
                  medication automatically every month. LionsPrideRx ships your
                  medication a week in advance to allow for shipping time and
                  logistics. Treatment plans start at only $2/pill.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="5">
                <Accordion.Header>
                  Does your company offer services in South Carolina?
                </Accordion.Header>
                <Accordion.Body>
                  No, we regret to inform you that our company does not
                  currently offer services in South Carolina.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="6">
                <Accordion.Header>
                  Can I still access your services if I am located in South
                  Carolina?
                </Accordion.Header>
                <Accordion.Body>
                  We apologize, but if you are located in South Carolina, we are
                  unable to provide our services to you at this time.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="7">
                <Accordion.Header>
                  Can I still contact your company for general inquiries or
                  support even though I am located in South Carolina?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we welcome all inquiries and support requests regardless
                  of location. Please feel free to contact us through our
                  website or customer service channels for assistance.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <Link href="/order" className="btn btn-primary btn-lg">
              Get Started Now
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
