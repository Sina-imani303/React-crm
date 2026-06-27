import "./SalesChart.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sale: 2200 },
  { month: "Feb", sale: 2800 },
  { month: "Mar", sale: 2500 },
  { month: "Apr", sale: 4100 },
  { month: "May", sale: 3800 },
  { month: "Jun", sale: 5200 },
  { month: "Jul", sale: 4900 },
  { month: "Aug", sale: 6100 },
  { month: "Sep", sale: 7200 },
  { month: "Oct", sale: 6900 },
  { month: "Nov", sale: 7600 },
  { month: "Dec", sale: 8400 },
];

export default function SalesChart() {
  return (
    <div className="salesChart">
      <div className="salesChartHeader">
        <div>
          <h3>Monthly Sales</h3>
          <p>Revenue overview for the last 12 months</p>
        </div>

        <button>View Report</button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ececec" strokeDasharray="4 4" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sale"
            stroke="#4f46e5"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
