import React from "react";
import Image from "next/image";
export default function Case() {
  return (
    <div>
      <main className="page">
        <article className="container">
          <ul className="nav account-nav">
            <li className="nav-item">
              <Link className="nav-link" href="membership.html">
                Membership
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="orders.html">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="profile.html">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="case.html">
                Case
              </Link>
            </li>
          </ul>
          <div className="row">
            <div className="col col-12 col-lg-7 col-xl-8 pe-lg-5">
              <h4>Submitted Answers</h4>
              <div className="account-table mb-5 mb-lg-0">
                <table className="table table-striped table-desktop">
                  <tbody>
                    <tr>
                      <th>Questions</th>
                      <th style={{ width: "25%" }}>Answers</th>
                    </tr>
                    <tr>
                      <td>Please write down additional notes.</td>
                      <td>Nothing Selected / Empty Answer</td>
                    </tr>
                    <tr>
                      <td>
                        Select any of the following medical issues that apply
                      </td>
                      <td>None Apply</td>
                    </tr>
                    <tr>
                      <td>List medication allergies</td>
                      <td>Nothing Selected / Empty Answer</td>
                    </tr>
                    <tr>
                      <td>Please list all other medical problems</td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        Do you have any heart/cardiac conditions? Arrhythmias?
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        Please identify all ED medications or drugs you take?
                      </td>
                      <td>Nothing Selected / Empty Answer</td>
                    </tr>
                    <tr>
                      <td>Please Explain, your heart/cardiac conditions</td>
                      <td>Nothing Selected / Empty Answer</td>
                    </tr>
                    <tr>
                      <td>
                        List all prescription medications which you take.
                        (Disclaimer: It is very important that you list the name
                        of each medication so your physician can make sure there
                        will not be any drug interactions).
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        Have you ever had a heart attack? Cardiac surgery?
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        Are you seeking treatment for improved sexual activity?
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>
                        Is there anything else you would like to tell the
                        doctor?
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        Are you currently using any of the following
                        recreational drugs?
                      </td>
                      <td>None Apply</td>
                    </tr>
                    <tr>
                      <td>
                        Do you use nitrates or any of the following medications
                        listed below?
                      </td>
                      <td>None Apply</td>
                    </tr>
                    <tr>
                      <td>
                        What is your blood pressure on an average day (even when
                        taking medication)?
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        Over the past 6 months, how do you rate your confidence
                        that you could keep an erection?
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        Are you currently taking any medications for erectile
                        dysfunction or pulmonary hypertension? (Example:
                        tadalafil, Cialis, sildenafil, Viagra, Revatio, Levitra)
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        Over the past 6 months, when you attempted sexual
                        intercourse, how often was it satisfactory for you?
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        Over the past 6 months, during sexual intercourse, how
                        difficult was it to maintain your erection to completion
                        of intercourse?
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        Have you had your vitals tested by a medical
                        practitioner in the past 3 years? This includes weight,
                        blood pressure, and heart rate.
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>
                        Over the past 6 months, when you had erections with
                        sexual stimulation, how often were your erections hard
                        enough for penetration (entering your partner)?
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
                <div className="tables-mobile">
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>Please write down additional notes.</td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>Nothing Selected / Empty Answer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Select any of the following medical issues that
                            apply
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>None Apply</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>List medication allergies</td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>Nothing Selected / Empty Answer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>Please list all other medical problems</td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Do you have any heart/cardiac conditions?
                            Arrhythmias?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Please identify all ED medications or drugs you
                            take?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>Nothing Selected / Empty Answer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>Please Explain, your heart/cardiac conditions</td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>Nothing Selected / Empty Answer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            List all prescription medications which you take.
                            (Disclaimer: It is very important that you list the
                            name of each medication so your physician can make
                            sure there will not be any drug interactions).
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Have you ever had a heart attack? Cardiac surgery?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Are you seeking treatment for improved sexual
                            activity?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>YES</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Is there anything else you would like to tell the
                            doctor?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Are you currently using any of the following
                            recreational drugs?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>None Apply</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Do you use nitrates or any of the following
                            medications listed below?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>None Apply</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            What is your blood pressure on an average day (even
                            when taking medication)?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Over the past 6 months, how do you rate your
                            confidence that you could keep an erection?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Are you currently taking any medications for
                            erectile dysfunction or pulmonary hypertension?
                            (Example: tadalafil, Cialis, sildenafil, Viagra,
                            Revatio, Levitra)
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Over the past 6 months, when you attempted sexual
                            intercourse, how often was it satisfactory for you?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Over the past 6 months, during sexual intercourse,
                            how difficult was it to maintain your erection to
                            completion of intercourse?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Have you had your vitals tested by a medical
                            practitioner in the past 3 years? This includes
                            weight, blood pressure, and heart rate.
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>YES</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="entry">
                    <table className="table table-mobile">
                      <tbody>
                        <tr>
                          <th scope="row" className="w-25">
                            Question:
                          </th>
                          <td>
                            Over the past 6 months, when you had erections with
                            sexual stimulation, how often were your erections
                            hard enough for penetration (entering your partner)?
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Answer:</th>
                          <td>NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col col-12 col-lg-5 col-xl-4">
              <h4>Submitted Files</h4>
              <div className="account-table mb-5">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Created&nbsp;At</th>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          className="/img"
                          src="/img/blank.png"
                          width={82}
                          height={82}
                          alt=""
                        />
                      </td>
                      <td>John-Doe-Passport.jpg</td>
                      <td>2022-09-01 16:03:02</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>Submit Files for Physician Review</h4>
              <form method="post" action="#" id="#">
                <div className="file-upload">
                  <input className="form-control" type="file" id="file" />
                  <label htmlFor="file">
                    Drag &amp; drop your files here or <span>browse</span> to
                    upload.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
