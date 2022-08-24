import React, { useState } from "react";
import { Header } from "../header-footer/Header";
export const CurrentMemberships = () => {
  return (
    <div>
      <Header header="My Memberships" subheader="Current Memberships" />
      <h5 className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
        You do not have any current Memberships
      </h5>
    </div>
  );
};
