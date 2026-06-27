import Home from "./pages/Home/Home";
import UserList from "./pages/User/UserList";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Analytics from "./pages/Analytics/Analytics";
import Sales from "./pages/Sales/Sales";
import NewUser from "./pages/NewUser/NewUser";
import Transactions from "./pages/TransActions/TransActions";
import Reports from "./pages/Reports/Reports";
import Mail from "./pages/Mail/Mail";
import Feedback from "./pages/FeedBack/FeedBack";
import Manage from "./pages/Manage/Manage";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/sales", element: <Sales /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/mail", element: <Mail /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/manage", element: <Manage /> },
  { path: "/transaction", element: <Transactions /> },
  { path: "/reports", element: <Reports /> },
  { path: "/user", element: <UserList /> },
  { path: "/Analytics", element: <Analytics /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
