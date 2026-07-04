import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productdata } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="producttitlecontainer">
        <div>
          <h1 className="producttitle">Product</h1>
          <p className="productsubtitle">
            View product details and update product information.
          </p>
        </div>

        <Link to="/newproduct" className="productCreateLink">
          Create
        </Link>
      </div>

      <div className="producttop">
        <div className="producttopleft">
          <Chart
            title="Sales in This Month"
            data={productdata}
            dataKey="sale"
          />
        </div>

        <div className="producttopright">
          <div className="productinfotop">
            <img
              src="/photo_2025-04-02_20-42-54.jpg"
              alt="Asus Laptop"
              className="productinfoimg"
            />

            <div>
              <span className="productInfoLabel">Product</span>
              <h2 className="productname">Asus Laptop</h2>
            </div>
          </div>

          <div className="productinfobottom">
            <div className="productinfoitem">
              <span className="productinfokey">ID</span>
              <span className="productinfovalue">132</span>
            </div>

            <div className="productinfoitem">
              <span className="productinfokey">Name</span>
              <span className="productinfovalue">Asus</span>
            </div>

            <div className="productinfoitem">
              <span className="productinfokey">Sales</span>
              <span className="productinfovalue">$90,000</span>
            </div>

            <div className="productinfoitem">
              <span className="productinfokey">Active</span>
              <span className="productStatus activeStatus">Yes</span>
            </div>

            <div className="productinfoitem">
              <span className="productinfokey">Stock</span>
              <span className="productStatus stockStatus">No</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productbottom">
        <div className="productBottomHeader">
          <div>
            <h2>Edit Product</h2>
            <p>Update product information and upload a new image.</p>
          </div>
        </div>

        <form className="productform">
          <div className="productformleft">
            <div className="productFormGroup">
              <label htmlFor="productName">Product Name</label>
              <input id="productName" type="text" placeholder="Asus Laptop" />
            </div>

            <div className="productFormGroup">
              <label htmlFor="stock">Stock</label>

              <select id="stock" defaultValue="yes">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="productFormGroup">
              <label htmlFor="active">Active</label>

              <select id="active" defaultValue="yes">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="productformright">
            <div className="productuploader">
              <img
                src="/photo_2025-04-02_20-42-54.jpg"
                alt="Product Preview"
                className="productuploadimg"
              />

              <label htmlFor="productUpload" className="productUploadLabel">
                <PublishIcon />
                <span>Choose Image</span>
              </label>

              <input id="productUpload" type="file" accept="image/*" hidden />
            </div>

            <button type="submit" className="productbutton">
              Upload & Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
