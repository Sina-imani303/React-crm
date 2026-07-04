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
      <div className="salesHeader">
        <div>
          <h1>Sales Overview</h1>
          <p>Monitor your sales performance and revenue insights.</p>
        </div>

        <button className="salesExportBtn">Export Report</button>
      </div>

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

      <div className="salesChartWrapper">
        <SalesChart />
      </div>

      <div className="salesBottom">
        <div className="topProductWrapper">
          <TopProduct />
        </div>

        <div className="categoryCard">
          <div className="categoryHeader">
            <h2>Sales by Category</h2>
            <p>Product sales distribution</p>
          </div>

          <div className="categoryChart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius="62%"
                  innerRadius="38%"
                  paddingAngle={4}
                >
                  {categoryData.map((item, index) => (
                    <Cell key={item.name} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
