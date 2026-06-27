import React from 'react'
 import  {useState} from "react";
 import {userrow} from "../../datas";
 import "./UserList.css";
 import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function UserList() {
  const [userDatas,setUserDatas]= useState(userrow)
  const userDelte=userID =>{
  setUserDatas(userDatas.filter(user =>user.id !== userID))
  }
 const columes=[
  {
   field: 'id',
    headerName: 'ID',
    width:90,
  
  },
  {
       field: 'user',
    headerName: 'User',
    width:200,
   renderCell:(param)=>{
      return(
        <Link to="/users"  className='link'>
        <div className="userlisuser">
          <img src={param.row.avatar} alt="" className='userlistimg' />
          {param.row.username}
        </div>
        </Link> 

      )
   }
  },
  {
    field:"email",
    headerName:"Email",
    width:200
  },
  {
    field:"stauts",
    headerName:"Stauts",
    width:120
  },
  {
    field:"transaction",
    headerName:"TranAction",
    width:160
  },

  {
    field:"action",
     headerName:"Action",
      width:150 ,
      renderCell:(param)=>{
      return(
        <>
         <Link to={`/user/ ${param.row.id}`} className='link'>
         <button className='userlistedit'>Edit</button>
         </Link>
         <DeleteOutlineIcon
         className='userlistdelete'
           onClick={()=>{
            userDelte(param.row.id)
           }}
         />
        </>
      )
      }
  }
 ]

  return (
    <div className='userlist'>
     <DataGrid
        rows={userDatas}
        columns={columes}
        pageSize={4}
        disableRowSelectionOnClick
      />
    </div>
  )
}
