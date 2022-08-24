import React from "react";
import { Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { Footer } from "../main/header-footer/Footer";
import { Details } from "../main/profile/Details";
import { Expirience } from "../main/profile/Expirience";
import { CurrentApplications } from "../main/memberships/CurrentApplication";
import { CurrentMemberships } from "../main/memberships/CurrentMemberships";
import { NewApplications } from "../main/memberships/NewApplications";
import { Events } from "../main/Events";
import { Guidelines } from "../main/nominations/Guidelines";
import { NewNomination } from "../main/nominations/NewNomination";
import { CurrentNominations } from "../main/nominations/CurrentNominations";
import { MemberApplication } from "../auth/MemberApplication";
import { MemberLogin } from "../auth/MemberLogin";
import "../../styles/auth_styles.css";
import { ProtectedRoutes } from "./ProtectedRoutes";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main style={{ backgroundColor: `#f5f5f5` }}>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <Routes>
        <Route path="/login" element={<MemberLogin />} />
        <Route path="/register" element={<MemberApplication />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Details />} />
          <Route path="/profile-experience" element={<Expirience />} />
          <Route path="/memberships-current" element={<CurrentMemberships />} />
          <Route
            path="/memberships-applications"
            element={<CurrentApplications />}
          />
          <Route path="/memberships-new" element={<NewApplications />} />
          <Route path="/my-events" element={<Events />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/new-nomination" element={<NewNomination />} />
          <Route path="/current-nominations" element={<CurrentNominations />} />
        </Route>
      </Routes>

      <Footer></Footer>
    </main>
  );
};

export default Main;
