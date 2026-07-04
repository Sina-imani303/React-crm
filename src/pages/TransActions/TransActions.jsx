import "./TransActions.css";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { DataGrid } from "@mui/x-data-grid";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Transactions() {
  const cards = [
    {
      title: "Total Revenue",
      value: "$245,820",
      icon: <PaidOutlinedIcon />,
      color: "#4F46E5",
    },
    {
      title: "Successful",
      value: "1,254",
      icon: <CreditCardOutlinedIcon />,
      color: "#16A34A",
    },
    {
      title: "Pending",
      value: "24",
      icon: <ScheduleOutlinedIcon />,
      color: "#F59E0B",
    },
    {
      title: "Refunds",
      value: "17",
      icon: <ReplayOutlinedIcon />,
      color: "#EF4444",
    },
  ];

  const rows = [
    {
      id: 1001,
      customer: "John Doe",
      email: "john@gmail.com",
      method: "Visa",
      status: "Paid",
      amount: "$1,240",
      date: "2025-07-06",
    },
    {
      id: 1002,
      customer: "Emma Watson",
      email: "emma@gmail.com",
      method: "PayPal",
      status: "Pending",
      amount: "$620",
      date: "2025-07-05",
    },
    {
      id: 1003,
      customer: "Michael Lee",
      email: "michael@gmail.com",
      method: "MasterCard",
      status: "Failed",
      amount: "$410",
      date: "2025-07-05",
    },
    {
      id: 1004,
      customer: "Sophia",
      email: "sophia@gmail.com",
      method: "Visa",
      status: "Paid",
      amount: "$2,150",
      date: "2025-07-04",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 180,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "method",
      headerName: "Method",
      width: 140,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <span className={`status ${params.row.status.toLowerCase()}`}>
          {params.row.status}
        </span>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 140,
    },
    {
      field: "date",
      headerName: "Date",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <VisibilityOutlinedIcon className="viewTransactionIcon" />
      ),
    },
  ];

  const paymentData = [
    { name: "Visa", value: 45 },
    { name: "MasterCard", value: 30 },
    { name: "PayPal", value: 15 },
    { name: "Apple Pay", value: 10 },
  ];

  const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444"];

  return (
    <div className="transactions">
      <div className="transactionHeader">
        <div>
          <h1>Transactions</h1>
          <p>Track payments, refunds and transaction history.</p>
        </div>

        <button>Export Report</button>
      </div>

      <div className="transactionCards">
        {cards.map((item, index) => (
          <div className="transactionCard" key={index}>
            <div className="transactionIcon" style={{ background: item.color }}>
              {item.icon}
            </div>

            <div className="transactionCardContent">
              <span>{item.title}</span>
              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="transactionTable">
        <h2>Recent Transactions</h2>

        <div className="transactionTableWrapper">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                  page: 0,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            autoHeight
          />
        </div>
      </div>

      <div className="transactionBottom">
        <div className="paymentCard">
          <h2>Payment Methods</h2>

          <div className="paymentChart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius="35%"
                  outerRadius="58%"
                  paddingAngle={5}
                >
                  {paymentData.map((item, index) => (
                    <Cell key={item.name} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="transactionActivityCard">
          <h2>Latest Activity</h2>

          <div className="transactionActivityItem">
            <div className="transactionDot transactionGreen"></div>

            <div>
              <h4>Payment Received</h4>
              <span>John paid $1,240</span>
            </div>
          </div>

          <div className="transactionActivityItem">
            <div className="transactionDot transactionOrange"></div>

            <div>
              <h4>Refund Requested</h4>
              <span>Emma requested refund</span>
            </div>
          </div>

          <div className="transactionActivityItem">
            <div className="transactionDot transactionBlue"></div>

            <div>
              <h4>Subscription Renewed</h4>
              <span>Premium Plan renewed</span>
            </div>
          </div>

          <div className="transactionActivityItem">
            <div className="transactionDot transactionRed"></div>

            <div>
              <h4>Payment Failed</h4>
              <span>Visa transaction declined</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
