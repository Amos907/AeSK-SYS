import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";

import { useLocation } from "react-router-dom";
function Layout() {
  const currentPath = useLocation();
  const [collapsed, setCollapsed] = useState(
    (currentPath.pathname == "/login") | (currentPath.pathname == "/register")
      ? true
      : false
  );

  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main />
    </div>
  );
}

export default Layout;
