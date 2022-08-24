import React, { useState } from "react";
import { Header } from "../header-footer/Header";
export const Expirience = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(phone);
  };

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
      <Header header="My Profile" subheader="Experience" />
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={submit}>
            <h6 className="fw-normal mb-3 header" style={{ letterSpacing: 1 }}>
              Please tell us about your current employment or study.
            </h6>

            <div className="form-outline">
              <h5
                className="fw-normal expirience-title"
                style={{ letterSpacing: 1 }}
              >
                Employment Status
              </h5>
              <h6
                className="fw-normal mb-3 header"
                style={{ letterSpacing: 1 }}
              >
                This information allows us to ensure that you are paying the
                correct price for any services you receive. It is also a useful
                way for us to monitor the diversity of our membership.
              </h6>
              <select
                className="form-select form-select-md w-50"
                aria-label=".form-select-md example"
              >
                {employmemtStatus.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-outline mt-3">
              <h5
                className="fw-normal expirience-title"
                style={{ letterSpacing: 1 }}
              >
                Job Title
              </h5>
              <h6
                className="fw-normal mb-3 header"
                style={{ letterSpacing: 1 }}
              >
                This information is required if you are booking a place at a
                lecture or conference, and will appear on the delegate list. It
                is also a useful way for us to monitor the diversity of our
                membership.
              </h6>
              <input
                type="email"
                id="form2Example17"
                className="form-control form-control-lg w-50"
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
            <div className="form-outline mt-3">
              <h5
                className="fw-normal mb-3 expirience-title"
                style={{ letterSpacing: 1 }}
              >
                Department
              </h5>
              <input
                type="text"
                id="form2Example17"
                className="form-control form-control-lg w-50"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-outline mt-3">
              <h5
                className="fw-normal  expirience-title"
                style={{ letterSpacing: 1 }}
              >
                Business Sector
              </h5>

              <h6
                className="fw-normal mb-3 header"
                style={{ letterSpacing: 1 }}
              >
                Please select the entry which most closely matches the sector in
                which you work. If your work spans multiple sectors, please
                choose the one which is more dominant, if applicable.
              </h6>
              <input
                type="text"
                id="form2Example17"
                className="form-control form-control-lg w-50"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-outline mt-3">
              <h5
                className="fw-normal  expirience-title"
                style={{ letterSpacing: 1 }}
              >
                Name of Organization
              </h5>

              <h6
                className="fw-normal mb-3 header"
                style={{ letterSpacing: 1 }}
              >
                It is important for us to understand where you work or study.
                This will ensure that you receive all possible benefits that may
                be available to you through this organisation (eg. if your
                employer or university is one of our Corporate Partners).
              </h6>
              <input
                type="text"
                id="form2Example17"
                className="form-control form-control-lg w-50"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <h6
              className="fw-normal mb-3 pb-2"
              style={{ letterSpacing: 1 }}
            ></h6>
          </form>
        </div>

        <div className="pt-1 mb-4">
          <button className="btn btn-dark btn-lg btn-block" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
