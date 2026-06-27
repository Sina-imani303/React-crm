import "./RevenueChart.css";

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
  { month: "Jan", revenue: 2400 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 2800 },
  { month: "Apr", revenue: 4200 },
  { month: "May", revenue: 3900 },
  { month: "Jun", revenue: 5100 },
  { month: "Jul", revenue: 4800 },
  { month: "Aug", revenue: 6200 },
  { month: "Sep", revenue: 7100 },
  { month: "Oct", revenue: 6700 },
  { month: "Nov", revenue: 7600 },
  { month: "Dec", revenue: 8400 },
];

export default function RevenueChart() {
  return (
    <div className="revenueChart">
      <div className="revenueHeader">
        <div>
          <h3>Revenue Overview</h3>
          <p>Monthly revenue performance</p>
        </div>

        <div className="revenueBadge">+18.4%</div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid stroke="#f1f5f9" vertical={false} />

          <XAxis dataKey="month" tickLine={false} axisLine={false} />

          <YAxis tickLine={false} axisLine={false} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={4}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
