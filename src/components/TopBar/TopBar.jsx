import "./TopBar.css";

import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">SINA</span>
        </div>

        <div className="topbarSearch">
          <SearchIcon className="topbarSearchIcon" />

          <input type="text" placeholder="Search dashboard..." />
        </div>

        <div className="topright">
          <button
            type="button"
            className="topbariconContainer"
            aria-label="Notifications"
          >
            <NotificationsIcon />

            <span className="topiconbadge">2</span>
          </button>

          <button
            type="button"
            className="topbariconContainer"
            aria-label="Language"
          >
            <LanguageIcon />

            <span className="topiconbadge">2</span>
          </button>

          <button
            type="button"
            className="topbariconContainer"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>

          <div className="topbarProfile">
            <img src="/1.jpg" alt="User profile" className="topavatar" />

            <div className="topbarUserInfo">
              <span className="topbarUserName">Sina</span>
              <small>Admin</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
