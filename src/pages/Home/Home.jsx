import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import Widgetsm from "../../components/Widgetsm/Widgetsm";
import Widgetlg from "../../components/Widgetlg/Widgetlg";

export default function Home() {
  return (
    <main className="home">
      {/* Header */}
      <div className="homeHeader">
        <div className="homeHeaderContent">
          <h1>Good Morning, Sina 👋</h1>

          <p>
            Welcome back, here&apos;s what&apos;s happening with your store
            today.
          </p>
        </div>

        <div className="headerDate">
          <span className="headerDateIcon">📅</span>
          <span>June 24, 2026</span>
        </div>
      </div>

      <section className="homeFeatures">
        <Features />
      </section>

      <section className="homeChart">
        <Chart grid title="Monthly Sales" data={xAxisData} dataKey="sale" />
      </section>

      <section className="homewidgets">
        <div className="homeWidgetSmall">
          <Widgetsm />
        </div>

        <div className="homeWidgetLarge">
          <Widgetlg />
        </div>
      </section>
    </main>
  );
}
