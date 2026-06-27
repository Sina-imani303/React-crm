import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import "./TrafficChart.css";
const data = [
  { name: "Google", value: 45 },
  { name: "Direct", value: 22 },
  { name: "Instagram", value: 18 },
  { name: "Facebook", value: 15 },
];

const COLORS = ["#2563EB", "#22C55E", "#F59E0B", "#EC4899"];

export default function TrafficChart() {
  return (
    <div className="trafficChart">
      <div className="trafficHeader">
        <h3>Traffic Sources</h3>
        <p>Visitors by channel</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={40} />
        </PieChart>
      </ResponsiveContainer>

      <div className="trafficStats">
        <div className="trafficItem">
          <span className="dot blue"></span>
          <p>Google</p>
          <strong>45%</strong>
        </div>

        <div className="trafficItem">
          <span className="dot green"></span>
          <p>Direct</p>
          <strong>22%</strong>
        </div>

        <div className="trafficItem">
          <span className="dot orange"></span>
          <p>Instagram</p>
          <strong>18%</strong>
        </div>

        <div className="trafficItem">
          <span className="dot pink"></span>
          <p>Facebook</p>
          <strong>15%</strong>
        </div>
      </div>
    </div>
  );
}
