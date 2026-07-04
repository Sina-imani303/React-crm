import "./Features.css";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Features() {
  const features = [
    {
      title: "Revenue",
      value: "$2,415",
      rate: "-11.4",
      trend: "down",
    },
    {
      title: "Sales",
      value: "$4,415",
      rate: "-1.4",
      trend: "down",
    },
    {
      title: "Profit",
      value: "$8,920",
      rate: "+8.6",
      trend: "up",
    },
    {
      title: "Orders",
      value: "1,254",
      rate: "+12.3",
      trend: "up",
    },
    {
      title: "Customers",
      value: "845",
      rate: "+5.8",
      trend: "up",
    },
    {
      title: "Visitors",
      value: "18.2K",
      rate: "+15.1",
      trend: "up",
    },
    {
      title: "Conversion",
      value: "6.4%",
      rate: "+1.1",
      trend: "up",
    },
    {
      title: "Expenses",
      value: "$1,240",
      rate: "-3.2",
      trend: "down",
    },
  ];

  return (
    <div className="features">
      {features.map((item) => {
        const isNegative = item.trend === "down";

        return (
          <div className="featureItem" key={item.title}>
            <span className="featureTitle">{item.title}</span>

            <div className="featureContainer">
              <span className="featureMoney">{item.value}</span>

              <span
                className={`featureRate ${
                  isNegative ? "negativeRate" : "positiveRate"
                }`}
              >
                {item.rate}

                {isNegative ? (
                  <ArrowDownwardIcon className="featureIcon" />
                ) : (
                  <ArrowUpwardIcon className="featureIcon" />
                )}
              </span>
            </div>

            <span className="featureSub">Compared to last month</span>
          </div>
        );
      })}
    </div>
  );
}
