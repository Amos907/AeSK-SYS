import React from "react";

import { Link } from "react-router-dom";
import { Contact } from "../main/Contact";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaCertificate,
  FaPenAlt,
  FaRegPlusSquare,
  FaFont,
  FaDirections,
  FaRegLaughWink,
  FaHeart,
  FaTelegramPlane,
  FaHistory,
  FaInfo,
  FaUserPlus,
  FaSlideshare,
  FaCalendar,
} from "react-icons/fa";
import sidebarBg from "../../images/bg2.jpg";

const Aside = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      collapsedWidth="0px"
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
          }}
        >
          <h6>Aeronotical Society of Kenya</h6>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu title="My Profile" icon={<FaRegLaughWink />}>
            <MenuItem icon={<FaInfo />}>
              Details <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaHistory />}>
              Experience <Link to="/profile-experience" />
            </MenuItem>
          </SubMenu>
          <SubMenu title="My Memberships" icon={<FaUserPlus />}>
            <MenuItem icon={<FaSlideshare />}>
              Current Memberships <Link to="/memberships-current" />
            </MenuItem>
            <MenuItem icon={<FaFont />}>
              Current Applications <Link to="/memberships-applications" />
            </MenuItem>
            <MenuItem icon={<FaPenAlt />}>
              Apply Now <Link to="/memberships-new" />
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<FaCalendar />}
            suffix={<span className="badge red">New</span>}
          >
            My Events <Link to="/my-events" />
          </MenuItem>

          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="My Nominations"
            icon={<FaHeart />}
          >
            <MenuItem icon={<FaDirections />}>
              Guidelines <Link to="/guidelines" />
            </MenuItem>
            <MenuItem
              icon={<FaRegPlusSquare />}
              suffix={<span className="badge yellow">3</span>}
            >
              New Nominations <Link to="/new-nomination" />
            </MenuItem>
            <MenuItem icon={<FaCertificate />}>
              Current Nominations <Link to="/current-nominations" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a target="_blank" className="sidebar-btn" rel="noopener noreferrer">
            <FaTelegramPlane />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={<Contact open="true" />}
            >
              Get in Touch
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
