import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import "./TrafficChart.css";

const data = [
  { name: "Google", value: 45, color: "#2563EB" },
  { name: "Direct", value: 22, color: "#22C55E" },
  { name: "Instagram", value: 18, color: "#F59E0B" },
  { name: "Facebook", value: 15, color: "#EC4899" },
];

export default function TrafficChart() {
  return (
    <div className="trafficChart">
      <div className="trafficHeader">
        <div>
          <h3>Traffic Sources</h3>
          <p>Visitors by channel</p>
        </div>

        <span className="trafficBadge">This Month</span>
      </div>

      <div className="trafficChartContainer">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="78%"
              paddingAngle={4}
              stroke="none"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value}%`, "Traffic"]}
              contentStyle={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="trafficCenter">
          <strong>100%</strong>
          <span>Total Traffic</span>
        </div>
      </div>

      <div className="trafficStats">
        {data.map((item) => (
          <div className="trafficItem" key={item.name}>
            <div className="trafficName">
              <span
                className="trafficDot"
                style={{ backgroundColor: item.color }}
              />

              <p>{item.name}</p>
            </div>

            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
