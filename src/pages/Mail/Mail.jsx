import "./Mail.css";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
export default function Mail() {
  const [openCompose, setOpenCompose] = useState(false);
  const stats = [
    {
      title: "Inbox",
      value: 28,
      icon: <MailOutlineIcon />,
      color: "#2563eb",
    },
    {
      title: "Starred",
      value: 12,
      icon: <StarBorderOutlinedIcon />,
      color: "#f59e0b",
    },
    {
      title: "Sent",
      value: 154,
      icon: <SendOutlinedIcon />,
      color: "#16a34a",
    },
    {
      title: "Trash",
      value: 5,
      icon: <DeleteOutlineOutlinedIcon />,
      color: "#ef4444",
    },
  ];
  const mails = [
    {
      id: 1,
      name: "John Doe",
      subject: "Welcome to Dashboard",
      message: "Hi Sina, your dashboard has been activated successfully.",
      time: "10:25 AM",
      unread: true,
    },
    {
      id: 2,
      name: "Emma Watson",
      subject: "Order Confirmation",
      message: "Your recent order has been shipped successfully.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 3,
      name: "Michael Lee",
      subject: "Invoice",
      message: "Invoice INV-2451 is ready to download.",
      time: "Jul 16",
      unread: false,
    },
    {
      id: 4,
      name: "Sophia",
      subject: "Meeting Reminder",
      message: "Don't forget tomorrow's meeting at 10 AM.",
      time: "Jul 15",
      unread: true,
    },
  ];
  const labels = [
    {
      name: "Work",
      color: "#2563eb",
    },
    {
      name: "Important",
      color: "#ef4444",
    },
    {
      name: "Personal",
      color: "#22c55e",
    },
    {
      name: "Design",
      color: "#f59e0b",
    },
  ];
  return (
    <div className="mail">
      <div className="mailHeader">
        <div>
          <h1>Inbox</h1>
          <p>Manage all your conversations and messages.</p>
        </div>

        <button className="composeBtn" onClick={() => setOpenCompose(true)}>
          <AddIcon />
          Compose
        </button>
      </div>
      <div className="mailSearch">
        <SearchIcon />

        <input type="text" placeholder="Search messages..." />
      </div>

      <div className="mailCards">
        {stats.map((item, index) => (
          <div className="mailCard" key={index}>
            <div className="mailIcon" style={{ background: item.color }}>
              {item.icon}
            </div>

            <div>
              <span>{item.title}</span>

              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mailContent">
        <div className="inbox">
          <h2>Inbox</h2>

          {mails.map((mail) => (
            <div className="mailItem" key={mail.id}>
              <div className="avatar">{mail.name.charAt(0)}</div>

              <div className="mailInfo">
                <h4>{mail.name}</h4>

                <span>{mail.subject}</span>
              </div>

              <div className="mailTime">
                <small>{mail.time}</small>

                {mail.unread && <div className="badge"></div>}
              </div>
            </div>
          ))}
        </div>

        <div className="mailPreview">
          <h2>Message Preview</h2>

          <div className="previewCard">
            <h3>Welcome to Dashboard</h3>

            <span>John Doe • john@gmail.com</span>

            <p>
              Hi Sina 👋
              <br />
              <br />
              Welcome to your new dashboard. This is a sample email preview. You
              can display the selected message here.
            </p>

            <button>Reply</button>
          </div>
        </div>
      </div>
      <div className="mailBottom">
        <div className="labelCard">
          <h2>Labels</h2>

          {labels.map((item, index) => (
            <div className="labelItem" key={index}>
              <FiberManualRecordIcon
                style={{
                  color: item.color,
                  fontSize: 16,
                }}
              />

              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="activityCard">
          <h2>Recent Activity</h2>

          <div className="activityItem">
            <LabelOutlinedIcon className="activityIcon" />

            <div>
              <h4>New Message</h4>

              <span>Emma sent you a new email.</span>
            </div>
          </div>

          <div className="activityItem">
            <LabelOutlinedIcon className="activityIcon" />

            <div>
              <h4>Draft Saved</h4>

              <span>Your draft has been saved.</span>
            </div>
          </div>

          <div className="activityItem">
            <LabelOutlinedIcon className="activityIcon" />

            <div>
              <h4>Mail Deleted</h4>

              <span>One email moved to trash.</span>
            </div>
          </div>

          <div className="activityItem">
            <LabelOutlinedIcon className="activityIcon" />

            <div>
              <h4>Starred Mail</h4>

              <span>You starred John's email.</span>
            </div>
          </div>
        </div>
      </div>
      {openCompose && (
        <div className="composeOverlay">
          <div className="composeModal">
            <div className="composeHeader">
              <h2>New Message</h2>

              <CloseIcon
                className="closeIcon"
                onClick={() => setOpenCompose(false)}
              />
            </div>

            <div className="composeBody">
              <input type="text" placeholder="To" />

              <input type="text" placeholder="Subject" />

              <textarea rows="8" placeholder="Write your message..."></textarea>

              <div className="composeFooter">
                <button
                  className="cancelBtn"
                  onClick={() => setOpenCompose(false)}
                >
                  Cancel
                </button>

                <button className="sendBtn">
                  <SendOutlinedIcon />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
