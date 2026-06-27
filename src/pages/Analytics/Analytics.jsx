import "./Analytics.css";

import AnalyticsCards from "../../components/AnalyticsCard/AnalyticsCard";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import TrafficChart from "../../components/TrafficChart/TrafficChart";

export default function Analytics() {
  return (
    <div className="analytics">
      <div className="analyticsHeader">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Monitor your business performance and track real-time insights.</p>
        </div>

        <button className="downloadBtn">Export Report</button>
      </div>

      <AnalyticsCards />

      <div className="analyticsGrid">
        <div className="largeCard">
          <RevenueChart />
        </div>

        <div className="smallCard">
          <TrafficChart />
        </div>
      </div>
    </div>
  );
}
