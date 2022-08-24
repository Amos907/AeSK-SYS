import React from "react";

import { Contact } from "../Contact";

export const Header = (props) => {
  return (
    <header>
      <h3 style={{ letterSpacing: 1 }}>{props.header}</h3>
      <p style={{ letterSpacing: 1 }}>{props.subheader}</p>
      {/* <Contact /> */}
    </header>
  );
};
