import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Features() {
  return (
    <div className="features">
      <div className="featureitem">
        <span className="featuretitle">Revenue</span>

        <div className="featurecontainer">
          <span className="featuremoney">$2,415</span>

          <span className="featurerate">
            -11.4
            <ArrowDownwardIcon className="featureicon negative" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      {/* Sales */}
      <div className="featureitem">
        <span className="featuretitle">Sales</span>

        <div className="featurecontainer">
          <span className="featuremoney">$4,415</span>

          <span className="featurerate">
            -1.4
            <ArrowDownwardIcon className="featureicon negative" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      {/* Profit */}
      <div className="featureitem">
        <span className="featuretitle">Profit</span>

        <div className="featurecontainer">
          <span className="featuremoney">$8,920</span>

          <span className="featurerate">
            +8.6
            <ArrowUpwardIcon className="featureicon" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      {/* Orders */}
      <div className="featureitem">
        <span className="featuretitle">Orders</span>

        <div className="featurecontainer">
          <span className="featuremoney">1,254</span>

          <span className="featurerate">
            +12.3
            <ArrowUpwardIcon className="featureicon" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      {/* Customers */}
      <div className="featureitem">
        <span className="featuretitle">Customers</span>

        <div className="featurecontainer">
          <span className="featuremoney">845</span>

          <span className="featurerate">
            +5.8
            <ArrowUpwardIcon className="featureicon" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      <div className="featureitem">
        <span className="featuretitle">Visitors</span>

        <div className="featurecontainer">
          <span className="featuremoney">18.2K</span>

          <span className="featurerate">
            +15.1
            <ArrowUpwardIcon className="featureicon" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      <div className="featureitem">
        <span className="featuretitle">Conversion</span>

        <div className="featurecontainer">
          <span className="featuremoney">6.4%</span>

          <span className="featurerate">
            +1.1
            <ArrowUpwardIcon className="featureicon" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>

      {/* Expenses */}
      <div className="featureitem">
        <span className="featuretitle">Expenses</span>

        <div className="featurecontainer">
          <span className="featuremoney">$1,240</span>

          <span className="featurerate">
            -3.2
            <ArrowDownwardIcon className="featureicon negative" />
          </span>
        </div>

        <span className="featuresub">Compared to last month</span>
      </div>
    </div>
  );
}
