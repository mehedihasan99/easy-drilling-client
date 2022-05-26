import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home/Home";
import MyLogin from "./Pages/Login/MyLogin";
import MySignUp from "./Pages/Login/MySignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import NotFound from "./Pages/Shared/NotFound";
import CustomersOrder from "./Pages/DashBoard/CustomersOrder";
import AddReview from "./Pages/DashBoard/AddReview";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Users from "./Pages/DashBoard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import ManageAllOrder from "./Pages/DashBoard/ManageAllOrder";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<MyLogin />} />
        <Route path="/signup" element={<MySignUp />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<CustomersOrder />} />
          <Route path="review" element={<AddReview />} />
          <Route
            path="user"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manageOrderProducts"
            element={
              <RequireAdmin>
                <ManageAllOrder />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProductOrders"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
