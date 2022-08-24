import React from "react";
import { Header } from "./header-footer/Header";

export const Events = () => {
  return (
    <div>
      <div>
        <Header header="My Events" subheader=" " />
        <h5 className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
          Your event bookings are listed below
        </h5>
        <p className="fw-normal mb-3 pb-3 header" style={{ letterSpacing: 1 }}>
          There are no events for this member.
        </p>
      </div>
    </div>
  );
};
