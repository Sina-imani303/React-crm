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

        <button type="button">View Report</button>
      </div>

      <div className="salesChartContainer">
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
              stroke="#ececec"
              strokeDasharray="4 4"
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
              dataKey="sale"
              stroke="#4f46e5"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#4f46e5",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 7,
                fill: "#4f46e5",
                strokeWidth: 0,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
