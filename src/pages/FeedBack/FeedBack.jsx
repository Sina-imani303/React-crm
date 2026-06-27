import "./FeedBack.css";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

export default function Feedback() {
  const cards = [
    {
      title: "Total Reviews",
      value: "1,254",
      icon: <StarOutlineIcon />,
      color: "#2563eb",
    },

    {
      title: "Positive",
      value: "924",
      icon: <ThumbUpAltOutlinedIcon />,
      color: "#16a34a",
    },

    {
      title: "Neutral",
      value: "214",
      icon: <SentimentNeutralOutlinedIcon />,
      color: "#f59e0b",
    },

    {
      title: "Negative",
      value: "116",
      icon: <ThumbDownAltOutlinedIcon />,
      color: "#ef4444",
    },
  ];

  const feedback = [
    {
      name: "John Doe",
      rate: "★★★★★",
      comment: "Excellent dashboard. Very easy to use.",
      date: "2 hours ago",
      status: "Positive",
    },

    {
      name: "Emma Watson",
      rate: "★★★★☆",
      comment: "Clean UI and smooth experience.",
      date: "Yesterday",
      status: "Positive",
    },

    {
      name: "Michael",
      rate: "★★★☆☆",
      comment: "Need more customization options.",
      date: "Jul 18",
      status: "Neutral",
    },

    {
      name: "Sophia",
      rate: "★★☆☆☆",
      comment: "Found some bugs while editing.",
      date: "Jul 17",
      status: "Negative",
    },
  ];

  return (
    <div className="feedback">
      <div className="feedbackHeader">
        <div>
          <h1>Feedback</h1>

          <p>Manage customer reviews and suggestions.</p>
        </div>

        <button>Add Review</button>
      </div>

      <div className="feedbackCards">
        {cards.map((item, index) => (
          <div className="feedbackCard" key={index}>
            <div className="feedbackIcon" style={{ background: item.color }}>
              {item.icon}
            </div>

            <div>
              <span>{item.title}</span>

              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="feedbackTable">
        <h2>Recent Feedback</h2>

        {feedback.map((item, index) => (
          <div className="feedbackItem" key={index}>
            <div>
              <h3>{item.name}</h3>

              <span>{item.rate}</span>

              <p>{item.comment}</p>
            </div>

            <div>
              <h4>{item.date}</h4>

              <button className={item.status.toLowerCase()}>
                {item.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
