import "./Reports.css";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function Reports() {
  const cards = [
    {
      title: "Revenue",
      value: "$542,890",
      change: "+12.4%",
      color: "#4F46E5",
      icon: <PaidOutlinedIcon />,
    },
    {
      title: "Orders",
      value: "8,421",
      change: "+6.3%",
      color: "#22C55E",
      icon: <ShoppingBagOutlinedIcon />,
    },
    {
      title: "Customers",
      value: "2,158",
      change: "+4.8%",
      color: "#F59E0B",
      icon: <GroupOutlinedIcon />,
    },
    {
      title: "Profit",
      value: "$98,240",
      change: "+18.1%",
      color: "#EC4899",
      icon: <TrendingUpOutlinedIcon />,
    },
  ];
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 5200 },
    { month: "Mar", revenue: 4700 },
    { month: "Apr", revenue: 6800 },
    { month: "May", revenue: 7200 },
    { month: "Jun", revenue: 8100 },
    { month: "Jul", revenue: 7800 },
    { month: "Aug", revenue: 9200 },
    { month: "Sep", revenue: 8800 },
    { month: "Oct", revenue: 9800 },
    { month: "Nov", revenue: 10300 },
    { month: "Dec", revenue: 11400 },
  ];
  return (
    <div className="reports">
      <div className="reportsHeader">
        <div>
          <h1>Reports</h1>
          <p>Generate and analyze your business reports.</p>
        </div>

        <button>Export PDF</button>
      </div>
      <div className="reportCards">
        {cards.map((card, index) => (
          <div className="reportCard" key={index}>
            <div className="reportIcon" style={{ background: card.color }}>
              {card.icon}
            </div>

            <div className="reportContent">
              <span>{card.title}</span>

              <h2>{card.value}</h2>

              <small>{card.change} this month</small>
            </div>
          </div>
        ))}
      </div>
      <div className="reportCharts">
        <div className="reportChart">
          <div className="chartHeader">
            <div>
              <h2>Revenue Trend</h2>
              <p>Revenue overview for the last 12 months</p>
            </div>

            <button>Download</button>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />

                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="4 4" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
