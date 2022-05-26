import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";
const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile px-14">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl text-center md:text-4xl font-bold text-primary">
          Your DashBoard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {admin || (
            <li>
              <Link to="/dashboard">Customers Order</Link>
            </li>
          )}
          {admin || (
            <li>
              <Link to="/dashboard/review">Add Review</Link>
            </li>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/user">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrderProducts">
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageProductOrders">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
