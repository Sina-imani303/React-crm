import React from "react";
import "./SideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageIcon from "@mui/icons-material/Message";

import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidewrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">DashBoard</h3>
          <ul className="sidebarlist">
            <Link to="/home" className="link">
              <li className="sidebaritem active">
                <LineStyleIcon className="sidebaricon" />
                Home
              </li>
            </Link>
            <Link to="/Analytics" className="link">
              <li className="sidebaritem">
                <TimelineIcon className="sidebaricon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link">
              <li className="sidebaritem">
                <TrendingUpIcon className="sidebaricon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarlist">
            <Link to="/user" className="link">
              <li className="sidebaritem ">
                <PermIdentityIcon className="sidebaricon" />
                Users
              </li>
            </Link>
            <Link to="/newuser" className="link">
              <li className="sidebaritem">
                <StorefrontIcon className="sidebaricon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebaritem">
                <MailOutlineIcon className="sidebaricon" />
                products
              </li>
            </Link>
            <Link to="/transaction" className="link">
              <li className="sidebaritem">
                <AttachMoneyIcon className="sidebaricon" />
                Transactions
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className="sidebaritem">
                <BarChartIcon className="sidebaricon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notification</h3>
          <ul className="sidebarlist">
            <li className="sidebaritem">
              <MailOutlineIcon className="sidebaricon" />
              Mail
            </li>
            <li className="sidebaritem">
              <DynamicFeedIcon className="sidebaricon" />
              Feedback
            </li>
            <li className="sidebaritem">
              <MessageIcon className="sidebaricon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebaritem ">
              <ChatBubbleOutlineIcon className="sidebaricon" />
              Manage
            </li>
            <li className="sidebaritem">
              <TimelineIcon className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebaritem">
              <ReportIcon className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
