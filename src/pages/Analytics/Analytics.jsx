import "./Analytics.css";

import AnalyticsCards from "../../components/AnalyticsCard/AnalyticsCard";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import TrafficChart from "../../components/TrafficChart/TrafficChart";

export default function Analytics() {
  return (
    <main className="analytics">
      <div className="analyticsHeader">
        <div className="analyticsHeaderContent">
          <h1>Analytics Dashboard</h1>

          <p>Monitor your business performance and track real-time insights.</p>
        </div>

        <button type="button" className="downloadBtn">
          <span className="downloadIcon">↓</span>
          Export Report
        </button>
      </div>

      <section className="analyticsCardsSection">
        <AnalyticsCards />
      </section>

      <section className="analyticsGrid">
        <div className="largeCard">
          <RevenueChart />
        </div>

        <div className="smallCard">
          <TrafficChart />
        </div>
      </section>
    </main>
  );
}
