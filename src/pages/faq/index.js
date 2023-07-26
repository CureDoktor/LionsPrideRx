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
              <Accordion.Item style={{ background: "none" }} eventKey="8">
                <Accordion.Header>
                  Which states is the telehealth service available in on
                  LionsPriderx.com?
                </Accordion.Header>
                <Accordion.Body>
                  The telehealth service on LionsPriderx.com is available in the
                  following states:
                  <br />
                  <br />
                  Alabama (AL)
                  <br />
                  Arizona (AZ)
                  <br />
                  Arkansas (AR)
                  <br />
                  California (CA)
                  <br />
                  Colorado (CO)
                  <br />
                  Connecticut (CT)
                  <br />
                  Delaware (DE)
                  <br />
                  Florida (FL)
                  <br />
                  Georgia (GA)
                  <br />
                  Hawaii (HI)
                  <br />
                  Idaho (ID)
                  <br />
                  Illinois (IL)
                  <br />
                  Indiana (IN)
                  <br />
                  Iowa (IA)
                  <br />
                  Kansas (KS)
                  <br />
                  Kentucky (KY)
                  <br />
                  Louisiana (LA)
                  <br />
                  Maine (ME)
                  <br />
                  Maryland (MD)
                  <br />
                  Massachusetts (MA)
                  <br />
                  Michigan (MI)
                  <br />
                  Minnesota (MN)
                  <br />
                  Mississippi (MS)
                  <br />
                  Missouri (MO)
                  <br />
                  Montana (MT)
                  <br />
                  Nebraska (NE)
                  <br />
                  Nevada (NV)
                  <br />
                  New Hampshire (NH)
                  <br />
                  New Jersey (NJ)
                  <br />
                  New Mexico (NM)
                  <br />
                  New York (NY)
                  <br />
                  North Carolina (NC)
                  <br />
                  North Dakota (ND)
                  <br />
                  Ohio (OH)
                  <br />
                  Oklahoma (OK)
                  <br />
                  Oregon (OR)
                  <br />
                  Pennsylvania (PA)
                  <br />
                  Rhode Island (RI)
                  <br />
                  South Dakota (SD)
                  <br />
                  Tennessee (TN)
                  <br />
                  Texas (TX)
                  <br />
                  Utah (UT)
                  <br />
                  Vermont (VT)
                  <br />
                  Virginia (VA)
                  <br />
                  Washington (WA)
                  <br />
                  West Virginia (WV)
                  <br />
                  Wisconsin (WI)
                  <br />
                  Wyoming (WY)
                  <br />
                  District of Columbia (DC)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="9">
                <Accordion.Header>
                  Is the telehealth service available in states not listed
                  above?
                </Accordion.Header>
                <Accordion.Body>
                  No, currently, the telehealth service is only available in the
                  states listed above. If you reside outside these states, you
                  may not be able to access the telehealth services on
                  LionsPriderx.com.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="10">
                <Accordion.Header>
                  Why is the telehealth service limited to certain states?
                </Accordion.Header>
                <Accordion.Body>
                  Telehealth services are regulated by individual state laws,
                  and each state has its own set of rules and requirements for
                  providing telehealth services. LionsPriderx.com is compliant
                  with the regulations in the listed states, which allows them
                  to offer telehealth services in those areas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="11">
                <Accordion.Header>
                  Are there any plans to expand the telehealth service to other
                  states in the future?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPriderx.com is always exploring opportunities to expand
                  its telehealth services to more states. However, the
                  availability in additional states will depend on various
                  factors, including regulatory requirements and licensing
                  considerations. Please stay tuned for updates on service
                  expansion.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="12">
                <Accordion.Header>
                  Can I access LionsPriderx.com telehealth services when
                  traveling to a state not listed above?
                </Accordion.Header>
                <Accordion.Body>
                  No, if you are traveling to a state that is not listed above,
                  you will not be able to access LionsPriderx.com telehealth
                  services during your stay in that state. The service is
                  limited to the states listed in the FAQ.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="13">
                <Accordion.Header>
                  Is the telehealth service available to all age groups in the
                  listed states?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPriderx.com telehealth services are available to
                  individuals who are 18 years or older within the listed
                  states. It&apos;s best to check with the platform directly or
                  their healthcare providers for more detailed information.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ background: "none" }} eventKey="14">
                <Accordion.Header>
                  Can I use LionsPriderx.com telehealth service for emergency
                  medical conditions?
                </Accordion.Header>
                <Accordion.Body>
                  LionsPriderx.com telehealth service is not intended for
                  emergency medical conditions. In case of a medical emergency,
                  please call your local emergency number immediately.
                  <br />
                  <br />
                  If you have any other questions or need further assistance,
                  feel free to contact the support team at LionsPriderx.com.
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
