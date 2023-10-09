import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  // console.log(admin);

  return (
    <div className="drawer drawer-mobile" style={{ color: "blue" }}>
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 classNameName="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar " className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">ALL Users</Link>
              </li>
              <li>
                <Link to="/dashboard/newparts">Add New Parts</Link>
              </li>
              <li>
                <Link to="/dashboard/manageorder">Manage Order</Link>
              </li>
              <li>
                <Link to="/dashboard/manageparts">Manage Parts</Link>
              </li>
            </>
          )}

          {/* newparts */}
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/mypurchase">My Purchase</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
