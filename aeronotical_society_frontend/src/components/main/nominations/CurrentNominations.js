import React, { useState } from "react";
import { Header } from "../header-footer/Header";
export const CurrentNominations = () => {
  return (
    <div>
      <Header header="My Nomiantions" subheader="Current Nominations" />
      <h5 className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        If you have recently made a nomination, you may review its progress
        here.
      </h5>
      <h6 className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        You do not have any current Memberships
      </h6>
    </div>
  );
};
