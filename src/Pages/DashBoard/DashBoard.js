import React from "react";
import { Link, Outlet } from "react-router-dom";
const DashBoard = () => {
  return (
    <div class="drawer drawer-mobile px-14">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl font-bold text-primary">Your DashBoard</h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Customers Order</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/user">All User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
