import React from 'react'
import "./Product.css";
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart/Chart';
import { productdata } from '../../datas';
import PublishIcon from '@mui/icons-material/Publish';
export default function Product() {
  return (
    <div className='product'>
        <div className="producttitlecontainer">
            <h1 className="producttitle">
                Product
            </h1>

            <Link to="/newproduct">
            </Link>
            <button className="productbtn">Create</button>
        </div>
      <div className="producttop">
        <div className="producttopleft">
          <Chart title="sale in this month" data={productdata} dataKey="sale"/>
        </div>
        <div className="producttopright">
    <div className="productinfotop">
      <img src="/photo_2025-04-02_20-42-54.jpg" alt="" className='productinfoimg' />
      <span className="productname">
        Asus
      </span>
    </div>

  <div className="productinfobottom">
    <div className="productinfoitem">
      <div className="productinfokey">ID:</div>
      <div className="productinfovalue">132</div>
    </div>

    <div className="productinfoitem">
      <div className="productinfokey">Name:</div>
      <div className="productinfovalue">Asus</div>
    </div>

    <div className="productinfoitem">
      <div className="productinfokey">Sales:</div>
      <div className="productinfovalue">$90000</div>
    </div>

    <div className="productinfoitem">
      <div className="productinfokey">Active:</div>
      <div className="productinfovalue">Yes</div>
    </div>
    <div className="productinfoitem">
      <div className="productinfokey">Stock:</div>
      <div className="productinfovalue">No</div>
    </div>
  </div>
        </div>
      </div>

  <div className="productbootom">
    <form  className="productform">
      <div className="productformleft">
        <label >Product Name</label>
        <input type="text" placeholder='Asus laptop' />
        <label> Stock</label>
        <select name="" id="instock">
          <option value="yse">yes</option>
          <option value="no">No</option>
        </select>

        <label >Active</label>
         <select name="" id="instock">
          <option value="yse">yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="productformright">

        <div className="productuploader">
          <img src="/photo_2025-04-02_20-42-54.jpg" alt=""  className='productuploadimg'/>
          <label><PublishIcon/></label>
    <input type="file" style={{display:"none"}}/>
        </div>

        <button className='productbutton'>Upload (Edit)</button>
      </div>
    </form>
  </div>


    </div>
  )
}
