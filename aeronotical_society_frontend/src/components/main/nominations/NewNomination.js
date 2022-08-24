import React, { useState } from "react";
import { Header } from "../header-footer/Header";

export const NewNomination = () => {
  const submit = (e) => {
    e.preventDefault();
    console.log("phone");
  };

  const [name, SetName] = useState();
  const awardTypes = [
    "Select the Award Type",
    "Individual Award",
    "Team Award",
    "Young Person's Award",
  ];
  return (
    <div>
      <Header header="My Memberships" subheader="New Nomination" />
      <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        The Society awards honours, medals and specialist awards to both
        individuals and teams and covers a full range of aerospace disciplines.
        The specialist awards are intended to cover the full range of aerospace
        disciplines.
      </p>

      <h5
        classname="fw-normal expirience-title"
        style={{ letterspacing: 1, color: "blue" }}
      >
        Award type
      </h5>

      <form onSubmit={submit}>
        <select
          className="form-select form-select-md w-50"
          aria-label=".form-select-md example"
        >
          {awardTypes.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>

        <div className="form-outline mt-3">
          <h5
            className="fw-normal expirience-title"
            style={{ letterSpacing: 1 }}
          >
            About the nominee
          </h5>
          <h6
            className="fw-normal mb-2 mt-3 header"
            style={{ letterSpacing: 1, color: "blue" }}
          >
            Name of Nominee or Team Leader
          </h6>

          <p className="fw-normal mb-3 header" style={{ letterSpacing: 1 }}>
            Self-nominations will not be considered
          </p>
          <input
            type="text"
            id="form2Example17"
            className="form-control form-control-lg w-50"
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="form-outline mt-3">
          <p
            className="fw-normal expirience-title"
            style={{ letterSpacing: 1 }}
          >
            Please provide a citation of 50-100 words, with emphasis on the
            major achievement or contribution worthy of recognition. This may be
            used in publications if the nomination is successful.
          </p>

          <textarea
            type="text"
            id="form2Example17"
            className="form-control form-control-lg w-50"
            onChange={(e) => SetName(e.target.value)}
          />

          <small>Remaining words:100</small>
        </div>
        <div className="form-outline mt-3">
          <h6
            className="fw-normal expirience-title"
            style={{ letterSpacing: 1 }}
          >
            Nominee's or Team Leader's Telephone
          </h6>

          <input
            type="text"
            id="form2Example17"
            className="form-control form-control-lg w-50"
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="form-outline mt-3">
          <h6
            className="fw-normal expirience-title"
            style={{ letterSpacing: 1 }}
          >
            Nominee's or Team Leader's Email
          </h6>

          <input
            type="email"
            id="form2Example17"
            className="form-control form-control-lg w-50"
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="form-outline mt-3">
          <h6
            className="fw-normal expirience-title"
            style={{ letterSpacing: 1 }}
          >
            SPECIFIC ACHIEVEMENTS UPON WHICH THIS NOMINATION IS BASED (500 words
            maximum).
          </h6>

          <textarea
            type="email"
            id="form2Example17"
            className="form-control form-control-lg w-50"
            onChange={(e) => SetName(e.target.value)}
          />

          <small>Remaining words:500</small>
        </div>
        <div className="form-outline mt-3">
          <h6
            className="fw-normal expirience-title"
            style={{ letterSpacing: 1 }}
          >
            SUPPORTING DOCUMENT: Please upload a single PDF with a CV detailing
            the nominee's career history, positions held, dates and nature of
            responsibilities. For team nominations, please list the names of key
            team members, position held and dates, and the history of the team's
            collaboration.
          </h6>

          <input
            type="file"
            id="form2Example17"
            className="form-control form-control-md w-50 mt-3"
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <p className="fw-normal mt-4" style={{ letterSpacing: 1 }}>
          Submit your nomination when you are ready for the Society to consider
          it.
        </p>
        <div className="pt-1 mb-4 mt-4">
          <button className="btn btn-dark btn-lg btn-block" onClick={submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
