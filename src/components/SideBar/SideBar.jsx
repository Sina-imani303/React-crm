import "./SideBar.css";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { NavLink } from "react-router-dom";

export default function SideBar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "sidebarlink active" : "sidebarlink";

  return (
    <aside className="sidebar">
      <div className="sidewrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>

          <ul className="sidebarlist">
            <li>
              <NavLink to="/home" className={getLinkClass}>
                <LineStyleIcon className="sidebaricon" />
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Analytics" className={getLinkClass}>
                <TimelineIcon className="sidebaricon" />
                <span>Analytics</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/sales" className={getLinkClass}>
                <TrendingUpIcon className="sidebaricon" />
                <span>Sales</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick Menu</h3>

          <ul className="sidebarlist">
            <li>
              <NavLink to="/user" className={getLinkClass}>
                <PermIdentityIcon className="sidebaricon" />
                <span>Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/newuser" className={getLinkClass}>
                <PersonAddAltOutlinedIcon className="sidebaricon" />
                <span>New User</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={getLinkClass}>
                <StorefrontIcon className="sidebaricon" />
                <span>Products</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/transaction" className={getLinkClass}>
                <AttachMoneyIcon className="sidebaricon" />
                <span>Transactions</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/reports" className={getLinkClass}>
                <BarChartIcon className="sidebaricon" />
                <span>Reports</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notification</h3>

          <ul className="sidebarlist">
            <li>
              <NavLink to="/mail" className={getLinkClass}>
                <MailOutlineIcon className="sidebaricon" />
                <span>Mail</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/feedback" className={getLinkClass}>
                <DynamicFeedIcon className="sidebaricon" />
                <span>Feedback</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>

          <ul className="sidebarlist">
            <li>
              <NavLink to="/manage" className={getLinkClass}>
                <ChatBubbleOutlineIcon className="sidebaricon" />
                <span>Manage</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
