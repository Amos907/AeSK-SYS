import React, { useState } from "react";
import { Header } from "../header-footer/Header";
export const NewApplications = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState();
  const employmemtStatus = [
    "Select",
    "Apprentice",
    "Employed-contract",
    "Employed-full-time",
    "Employed-part time",
    "Employed-secondee",
    "Intern/Work Expirience",
    "Retired",
    "Self-employed",
    "Study-full-time",
    "Study-part-time",
    "Unemployed",
  ];

  return (
    <div>
      <Header header="My Memberships" subheader="New Applications" />
      <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        You do not have any active memberships.
      </p>
      <h5 className="fw-normal expirience-title" style={{ letterspacing: 1 }}>
        Select the grade you would like to apply for.
      </h5>
      <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        Please note that if you wish to apply for both Society membership and
        Engineering Council registration, you will need to complete each
        application separately. (You can save an application at any stage and
        return to it later.)
      </p>
      <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        <strong>IMPORTANT:</strong> If you wish to apply for both AeSK
        membership and Engineering Council registration,{" "}
        <strong>YOU MUST</strong> complete your AeSK membership application
        first, before completing your Engineering Council application. Note the
        application deadlines for each type of application.
      </p>
      <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        If you cannot click on the grade of membership or level of registration
        which you wish to apply for, you may not have the prerequisite grade of
        AeSK membership for this application. Please review the requirements for
        your application here, or contact us for more information. If you are
        applying for Student Affiliate or Apprentice Affiliate grades, you must
        ensure that you have entered correct information under the My Experience
        section of your profile before proceeding with your application.
      </p>

      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-outline">
              <h6
                className="fw-normal expirience-title"
                style={{ letterspacing: 1 }}
              >
                Society Membership
              </h6>
              <select
                className="form-select form-select-md mb-3 w-50"
                aria-label=".form-select-lg example"
              >
                {employmemtStatus.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-outline">
              <h6
                className="fw-normal expirience-title"
                style={{ letterspacing: 1 }}
              >
                Engineering council registration
              </h6>
              <select
                className="form-select form-select-md mb-3 w-50"
                aria-label=".form-select-lg example"
              >
                {employmemtStatus.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
