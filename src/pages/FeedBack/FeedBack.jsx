import "./Feedback.css";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

export default function Feedback() {
  const cards = [
    {
      title: "Total Reviews",
      value: "1,284",
      icon: <StarOutlineIcon />,
      color: "#2563eb",
    },
    {
      title: "Positive",
      value: "892",
      icon: <ThumbUpAltOutlinedIcon />,
      color: "#16a34a",
    },
    {
      title: "Neutral",
      value: "247",
      icon: <SentimentNeutralOutlinedIcon />,
      color: "#f59e0b",
    },
    {
      title: "Negative",
      value: "145",
      icon: <ThumbDownAltOutlinedIcon />,
      color: "#ef4444",
    },
  ];

  const feedback = [
    {
      name: "Sarah Johnson",
      rate: "★★★★★",
      comment:
        "Amazing service and a great experience. Everything was simple and easy to use.",
      date: "June 24, 2026",
      status: "Positive",
    },
    {
      name: "Michael Brown",
      rate: "★★★★☆",
      comment:
        "The dashboard is very useful, but I would like to see more reporting options.",
      date: "June 22, 2026",
      status: "Neutral",
    },
    {
      name: "Emma Wilson",
      rate: "★★★★★",
      comment:
        "Excellent support team. They answered my questions very quickly.",
      date: "June 20, 2026",
      status: "Positive",
    },
    {
      name: "David Miller",
      rate: "★★☆☆☆",
      comment:
        "The loading speed could be improved, especially on mobile devices.",
      date: "June 18, 2026",
      status: "Negative",
    },
  ];

  return (
    <main className="feedback">
      <div className="feedbackHeader">
        <div className="feedbackHeaderContent">
          <h1>Feedback</h1>
          <p>Manage customer reviews and suggestions.</p>
        </div>

        <button type="button" className="addReviewBtn">
          Add Review
        </button>
      </div>

      <section className="feedbackCards">
        {cards.map((item, index) => (
          <div className="feedbackCard" key={index}>
            <div
              className="feedbackIcon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="feedbackCardContent">
              <span>{item.title}</span>
              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </section>

      <section className="feedbackTable">
        <h2 className="feedbackTableTitle">Recent Feedback</h2>

        <div className="feedbackList">
          {feedback.map((item, index) => (
            <div className="feedbackItem" key={index}>
              <div className="feedbackItemContent">
                <h3>{item.name}</h3>
                <span className="feedbackRate">{item.rate}</span>
                <p>{item.comment}</p>
              </div>

              <div className="feedbackItemMeta">
                <h4>{item.date}</h4>

                <button
                  type="button"
                  className={`feedbackStatus ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
