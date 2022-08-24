import React, { useState } from "react";
import { Header } from "../header-footer/Header";
export const CurrentApplications = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState();

  return (
    <div>
      <Header header="My Memberships" subheader="Current Applications" />
      <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        Below is a summary of any applications you have made and their current
        status. For applications which have been submitted, this page will show
        any fees that are now due.
      </p>

      <p>
        <strong>Note:</strong> If you have started multiple applications for the
        same grade, please delete any duplicates as soon as possible.
      </p>
      <p className="pt-5">You don't have any applications</p>
    </div>
  );
};
