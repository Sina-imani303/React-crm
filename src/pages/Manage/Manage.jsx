import "./Manage.css";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";

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
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div className="employeeAvatar">{params.row.avatar}</div>
      ),
    },
    {
      field: "name",
      headerName: "Employee",
      minWidth: 170,
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "department",
      headerName: "Department",
      minWidth: 140,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 140,
      renderCell: (params) => (
        <span
          className={`employeeStatus ${params.row.status
            .replace(/\s+/g, "")
            .toLowerCase()}`}
        >
          {params.row.status}
        </span>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 210,
      flex: 1.2,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <div className="actionButtons">
          <button type="button" className="actionBtn editBtn">
            <EditOutlinedIcon className="editIcon" />
          </button>

          <button type="button" className="actionBtn deleteBtn">
            <DeleteOutlineOutlinedIcon className="deleteIcon" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <main className="manage">
      <div className="manageHeader">
        <div className="manageHeaderContent">
          <h1>Manage Staff</h1>
          <p>Monitor employees and manage your team.</p>
        </div>

        <button type="button" className="addEmployeeBtn">
          <AddIcon />
          <span>Add Employee</span>
        </button>
      </div>

      <section className="manageCards">
        {cards.map((item, index) => (
          <div className="manageCard" key={index}>
            <div className="manageIcon" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>

            <div className="manageCardInfo">
              <span>{item.title}</span>
              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </section>

      <section className="employeeTable">
        <div className="employeeTableHeader">
          <div>
            <h2>Team Members</h2>
            <p>View and manage all employees in your organization.</p>
          </div>
        </div>

        <div className="dataGridWrapper">
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
      </section>
    </main>
  );
}
