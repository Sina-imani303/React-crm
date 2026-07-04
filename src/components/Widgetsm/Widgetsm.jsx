import "./Widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newmembr } from "../../datas";

export default function Widgetsm() {
  return (
    <div className="Widgetsm">
      <div className="Widgetsmheader">
        <div>
          <h3 className="Widgetsmtitle">New Join Members</h3>
          <p className="Widgetsmsubtitle">Recently joined team members</p>
        </div>

        <span className="Widgetsmcount">{newmembr.length}</span>
      </div>

      <ul className="Widgetsmlist">
        {newmembr.map((member) => (
          <li className="Widgetsmlistitem" key={member.id}>
            <div className="Widgetsmprofile">
              <img
                src={member.img}
                alt={member.username}
                className="Widgetsmimg"
              />

              <div className="Widgetsmuser">
                <span className="Widgetsmusername">{member.username}</span>

                <span className="Widgetsmusertitle">{member.title}</span>
              </div>
            </div>

            <button className="Widgetsmbtn" type="button">
              <VisibilityIcon className="Widgetsmicon" />
              <span>View</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
