import "./Manage.css";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { DataGrid } from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export default function Manage() {
  const cards = [
    {
      title: "Employees",
      value: "128",
      color: "#2563eb",
      icon: <GroupsOutlinedIcon />,
    },

    {
      title: "Active",
      value: "112",
      color: "#16a34a",
      icon: <PersonOutlineOutlinedIcon />,
    },

    {
      title: "On Leave",
      value: "9",
      color: "#f59e0b",
      icon: <BeachAccessOutlinedIcon />,
    },

    {
      title: "Managers",
      value: "7",
      color: "#9333ea",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
  ];
  const rows = [
    {
      id: 1,
      avatar: "J",
      name: "John Doe",
      role: "Admin",
      department: "IT",
      status: "Active",
      email: "john@gmail.com",
    },
    {
      id: 2,
      avatar: "E",
      name: "Emma Watson",
      role: "HR Manager",
      department: "HR",
      status: "On Leave",
      email: "emma@gmail.com",
    },
    {
      id: 3,
      avatar: "M",
      name: "Michael Lee",
      role: "Developer",
      department: "IT",
      status: "Active",
      email: "michael@gmail.com",
    },
    {
      id: 4,
      avatar: "S",
      name: "Sophia",
      role: "UI Designer",
      department: "Design",
      status: "Active",
      email: "sophia@gmail.com",
    },
    {
      id: 5,
      avatar: "A",
      name: "Alex Brown",
      role: "Marketing",
      department: "Marketing",
      status: "Vacation",
      email: "alex@gmail.com",
    },
  ];
  const columns = [
    {
      field: "avatar",
      headerName: "",
      width: 80,
      renderCell: (params) => (
        <div className="employeeAvatar">{params.row.avatar}</div>
      ),
    },

    {
      field: "name",
      headerName: "Employee",
      width: 190,
    },

    {
      field: "role",
      headerName: "Role",
      width: 170,
    },

    {
      field: "department",
      headerName: "Department",
      width: 160,
    },

    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => (
        <span
          className={`employeeStatus ${params.row.status
            .replace(" ", "")
            .toLowerCase()}`}
        >
          {params.row.status}
        </span>
      ),
    },

    {
      field: "email",
      headerName: "Email",
      width: 240,
    },

    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: () => (
        <div className="actionButtons">
          <EditOutlinedIcon className="editIcon" />
          <DeleteOutlineOutlinedIcon className="deleteIcon" />
        </div>
      ),
    },
  ];

  return (
    <div className="manage">
      <div className="manageHeader">
        <div>
          <h1>Manage Staff</h1>

          <p>Monitor employees and manage your team.</p>
        </div>

        <button>Add Employee</button>
      </div>

      <div className="manageCards">
        {cards.map((item, index) => (
          <div className="manageCard" key={index}>
            <div className="manageIcon" style={{ background: item.color }}>
              {item.icon}
            </div>

            <div>
              <span>{item.title}</span>

              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="employeeTable">
        <h2>Team Members</h2>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </div>
  );
}
