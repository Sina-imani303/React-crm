import React from 'react'
import "./Widgetsm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newmembr } from '../../datas';
export default function Widgetsm() {
  return (
    <div className='Widgetsm'>
      <span className="Widgetsmtitle"> New Join Members</span>
      <ul className="Widgetsmlist">
        {newmembr.map(member=>(

        <li className="Widgetsmlistitem">
            <img key={member.id} src={member.img} alt=""  className='Widgetsmimg'/>
            <div className="Widgetsmuser">
                <span className="Widgetsmusername">{member.username}</span>
                <span className="Widgetsmusertitle"> {member.title}</span>
            </div>
            <button className="Widgetsmbtn">
               <VisibilityIcon className='Widgetsmicon'/>
            </button>
        </li>
        ))}

     
      </ul>
    </div>
  )
}
