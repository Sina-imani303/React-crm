import { useState } from "react";
import { userrow } from "../../datas";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  const [userDatas, setUserDatas] = useState(userrow);

  const userDelete = (userID) => {
    setUserDatas((prevUsers) => prevUsers.filter((user) => user.id !== userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 220,
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className="link">
            <div className="userListUser">
              <img
                src={params.row.avatar}
                alt={params.row.username}
                className="userListImg"
              />

              <span>{params.row.username}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 240,
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => (
        <span
          className={`userStatus ${
            params.row.status?.toLowerCase() || "active"
          }`}
        >
          {params.row.status || "Active"}
        </span>
      ),
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="userListActions">
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="userListDelete"
              onClick={(event) => {
                event.stopPropagation();
                userDelete(params.row.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userListHeader">
        <div>
          <h1>Users</h1>
          <p>Manage users, accounts and transactions.</p>
        </div>

        <Link to="/newuser" className="link">
          <button className="addUserButton">Add New User</button>
        </Link>
      </div>

      <div className="userListTable">
        <DataGrid
          rows={userDatas}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
                page: 0,
              },
            },
          }}
          pageSizeOptions={[4, 8, 12]}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </div>
  );
}
