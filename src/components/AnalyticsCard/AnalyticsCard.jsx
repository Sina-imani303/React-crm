import "./AnalyticCard.css";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function AnalyticsCards() {
  const cards = [
    {
      title: "Revenue",
      value: "$24,520",
      change: "+12.5%",
      icon: <PaidOutlinedIcon />,
      color: "#6366F1",
    },
    {
      title: "Orders",
      value: "1,245",
      change: "+8.1%",
      icon: <ShoppingBagOutlinedIcon />,
      color: "#22C55E",
    },
    {
      title: "Customers",
      value: "845",
      change: "+5.2%",
      icon: <GroupOutlinedIcon />,
      color: "#F59E0B",
    },
    {
      title: "Growth",
      value: "18.6%",
      change: "+2.3%",
      icon: <TrendingUpOutlinedIcon />,
      color: "#EC4899",
    },
  ];

  return (
    <div className="analyticsCards">
      {cards.map((card, index) => (
        <div className="analyticsCard" key={index}>
          <div
            className="analyticsIcon"
            style={{ backgroundColor: card.color }}
          >
            {card.icon}
          </div>

          <div className="analyticsContent">
            <span>{card.title}</span>
            <h2>{card.value}</h2>

            <small>{card.change} this month</small>
          </div>
        </div>
      ))}
    </div>
  );
}
