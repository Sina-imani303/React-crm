import React from 'react'
import "./TopBar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="topbarwraper">
        <div className="topleft">
          <span className='logo fw-bold'> SINA</span>
        </div>
        <div className="topright">
          <div className="topbariconContainer">
            <NotificationsIcon/>
            <span className='topiconbage'>2</span>
          </div>
          <div className="topbariconContainer">
            < LanguageIcon/>
            <span className='topiconbage'>2</span>
          </div>
          <div className="topbariconContainer">
            <SettingsIcon/>
          </div>
          <img src="1.jpg" alt="" className='topavatar' />
        </div>
      </div>
      
    </div>
  )
}
