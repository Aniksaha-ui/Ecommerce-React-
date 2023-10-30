import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useApi from "../assets/hooks/useApi";

const DashboardSidebar = ({ children }) => {
  /**dependancy injection */
  const api = useApi();

  /**declear all state */
  const [role, setRole] = useState(null);

  /**load localstorage data */
  useEffect(() => {
    const response = api.getLocalStorageValue();
    setRole(response.role);
  }, []);

  return (
    <div class="drawer drawer-mobile mt-16 bg-accent">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      {/* <div class="drawer-content flex flex-col items-center justify-center"> */}
      <div class="mx-4 mt-4 drawer-content items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <li>
            <NavLink to="/dashboard/add-service">Add Service</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-admin">Add Admin</NavLink>
          </li> */}
          {role === "admin" && (
            <li>
              <NavLink to="/dashboard/category">Manage Category</NavLink>
            </li>
          )}
          {role === "user" && (
            <li>
              <NavLink to="#">TBA</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
