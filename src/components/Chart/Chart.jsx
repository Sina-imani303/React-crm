import "./Chart.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <div className="chartHeader">
        <div>
          <h3 className="chartTitle">{title}</h3>
          <p className="chartDescription">
            Track performance and sales activity over time.
          </p>
        </div>
      </div>

      <div className="chartContainer">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            {grid && (
              <CartesianGrid
                stroke="#e5e7eb"
                strokeDasharray="5 5"
                vertical={false}
              />
            )}

            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
              width={45}
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
              dataKey={dataKey}
              stroke="#5550bd"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#5550bd",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 7,
                strokeWidth: 0,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
