import React from "react";
import "./Sales.css";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import SalesChart from "../../components/SalesChart/SalesChart";
import TopProduct from "../../components/TopProduct/TopProduct";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function Sales() {
  const cards = [
    {
      title: "Today's Sales",
      value: "$12,520",
      change: "+12.5%",
      icon: <PaidOutlinedIcon />,
      color: "#6366F1",
    },
    {
      title: "Total Orders",
      value: "1,275",
      change: "+8.1%",
      icon: <ShoppingBagOutlinedIcon />,
      color: "#22C55E",
    },
    {
      title: "Average Order",
      value: "$8,045",
      change: "+5.2%",
      icon: <GroupOutlinedIcon />,
      color: "#F59E0B",
    },
    {
      title: "Customer Rate",
      value: "4.8%",
      change: "+2.3%",
      icon: <TrendingUpOutlinedIcon />,
      color: "#EC4899",
    },
  ];

  const categoryData = [
    { name: "Electronics", value: 48 },
    { name: "Fashion", value: 22 },
    { name: "Food", value: 18 },
    { name: "Books", value: 12 },
  ];

  const COLORS = ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="sales">
      <div className="salesCards">
        {cards.map((card, index) => (
          <div className="salesCard" key={index}>
            <div className="salesIcon" style={{ backgroundColor: card.color }}>
              {card.icon}
            </div>

            <div className="salesContent">
              <span>{card.title}</span>
              <h2>{card.value}</h2>
              <small>{card.change} this month</small>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Chart */}
      <SalesChart />

      {/* Bottom Section */}
      <div className="salesBottom">
        <div className="topProductWrapper">
          <TopProduct />
        </div>

        <div className="categoryCard">
          <h2>Sales by Category</h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={95}
                innerRadius={55}
                label
              >
                {categoryData.map((item, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Sales;
