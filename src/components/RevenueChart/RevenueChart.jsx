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

      <div className="revenueChartContainer">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 15,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f1f5f9"
              strokeDasharray="5 5"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 13,
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              width={45}
              tick={{
                fill: "#6b7280",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#2563eb",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 7,
                fill: "#2563eb",
                strokeWidth: 0,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
