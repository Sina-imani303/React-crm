 import  {useState} from "react";
 import {products} from "../../datas";
 import "./Products.css";
 import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function Products() {
  const [productsDatas,setproductDatas]= useState(products)
  const productDelte=productID =>{
  setproductDatas(productsDatas.filter(product =>product.id !== productID))
  }
 const columes=[
  {
   field: 'id',
    headerName: 'ID',
    width:90,
  
  },
  {
       field: 'title',
    headerName: 'Name',
    width:200,
   renderCell:(param)=>{
      return(
        <Link to={`/product/ ${param.row.id}`}  className='link'>
        <div className="userlisuser">
          <img src={param.row.avatar} alt="" className='userlistimg' />
          {param.row.title}
        </div>
        </Link> 

      )
   }
  },
  {
    field:"price",
    headerName:"Price",
    width:200,
    renderCell: (param) => `$${param.row.price}`

  },


  {
    field:"action",
     headerName:"Action",
      width:150 ,
      renderCell:(param)=>{
      return(
        <>
         <Link to={`/product/ ${param.row.id}`} className='link'>
         <button className='userlistedit'>Edit</button>
         </Link>
         <DeleteOutlineIcon
         className='userlistdelete'
           onClick={()=>{
            productDelte(param.row.id)
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
        rows={productsDatas}
        columns={columes}
        pageSize={3}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}
