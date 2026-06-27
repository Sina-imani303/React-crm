import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import Widgetsm from "../../components/Widgetsm/Widgetsm";
import Widgetlg from "../../components/Widgetlg/Widgetlg";

export default function Home() {
  return (
    <div className="home">
      <div className="homeHeader">
        <div>
          <h1>Good Morning, Sina 👋</h1>
          <p>Welcome back, here's what's happening with your store today.</p>
        </div>

        <div className="headerDate">
          <span>📅 June 24, 2026</span>
        </div>
      </div>

      <Features />

      <Chart grid title="Monthly Sales" data={xAxisData} dataKey="sale" />

      <div className="homewidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
}
