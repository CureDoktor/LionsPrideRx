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
                  branded E.D.&nbsp;medications such as Viagra and Cialis
                  to&nbsp;give you a wide range of choices to help you manage
                  E.D. effectively.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="1">
                <Accordion.Header>
                  {" "}
                  Can you purchase Viagra and Cialis without a prescription?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPrideRx is an online portal that connects you to
                  US-licensed physicians and partner online pharmacies in the US
                  to legally purchase FDA-approved E.D. treatments, shipped
                  discreetly to your home. LionsPrideRx offers generic and
                  branded E.D.&nbsp;medications such as Viagra and Cialis
                  to&nbsp;give you a wide range of choices to help you manage
                  E.D. effectively.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="2">
                <Accordion.Header>
                  {" "}
                  How much Viagra should I take?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPrideRx is an online portal that connects you to
                  US-licensed physicians and partner online pharmacies in the US
                  to legally purchase FDA-approved E.D. treatments, shipped
                  discreetly to your home. LionsPrideRx offers generic and
                  branded E.D.&nbsp;medications such as Viagra and Cialis
                  to&nbsp;give you a wide range of choices to help you manage
                  E.D. effectively.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="3">
                <Accordion.Header>Are e-Prescriptions valid?</Accordion.Header>
                <Accordion.Body>
                  LionsPrideRx is an online portal that connects you to
                  US-licensed physicians and partner online pharmacies in the US
                  to legally purchase FDA-approved E.D. treatments, shipped
                  discreetly to your home. LionsPrideRx offers generic and
                  branded E.D.&nbsp;medications such as Viagra and Cialis
                  to&nbsp;give you a wide range of choices to help you manage
                  E.D. effectively.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="4">
                <Accordion.Header>
                  {" "}
                  How does LionsPrideRx’s treatment plan work?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPrideRx is an online portal that connects you to
                  US-licensed physicians and partner online pharmacies in the US
                  to legally purchase FDA-approved E.D. treatments, shipped
                  discreetly to your home. LionsPrideRx offers generic and
                  branded E.D.&nbsp;medications such as Viagra and Cialis
                  to&nbsp;give you a wide range of choices to help you manage
                  E.D. effectively.
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
