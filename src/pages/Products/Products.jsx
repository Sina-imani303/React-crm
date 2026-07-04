import { useState } from "react";
import { products } from "../../datas";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function Products() {
  const [productsDatas, setProductDatas] = useState(products);
  const [search, setSearch] = useState("");

  const productDelete = (productID) => {
    setProductDatas(
      productsDatas.filter((product) => product.id !== productID),
    );
  };

  const filteredProducts = productsDatas.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Product",
      minWidth: 220,
      flex: 1,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="productListLink">
            <div className="productListProduct">
              <img
                src={params.row.avatar}
                alt={params.row.title}
                className="productListImg"
              />

              <span>{params.row.title}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 180,
      renderCell: (params) => (
        <span className="productPrice">${params.row.price}</span>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="productListActions">
            <Link to={`/product/${params.row.id}`} className="productListLink">
              <button className="productListEdit">Edit</button>
            </Link>

            <button
              type="button"
              className="productListDeleteButton"
              onClick={() => productDelete(params.row.id)}
              aria-label={`Delete ${params.row.title}`}
            >
              <DeleteOutlineIcon className="productListDelete" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="productsPage">
      <div className="productsHeader">
        <div>
          <h1>Products</h1>
          <p>Manage your products, prices and inventory.</p>
        </div>

        <Link to="/newproduct" className="addProductBtn">
          <AddIcon />
          Add Product
        </Link>
      </div>

      <div className="productsStats">
        <div className="productsStatIcon">
          <Inventory2OutlinedIcon />
        </div>

        <div>
          <span>Total Products</span>
          <h2>{productsDatas.length}</h2>
        </div>
      </div>

      <div className="productsTableCard">
        <div className="productsTableHeader">
          <div>
            <h2>Product List</h2>
            <p>View and manage all available products.</p>
          </div>

          <div className="productsSearch">
            <SearchIcon />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        <div className="productsDataGrid">
          <DataGrid
            rows={filteredProducts}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                  page: 0,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            disableRowSelectionOnClick
            checkboxSelection
            autoHeight
          />
        </div>
      </div>
    </div>
  );
}
