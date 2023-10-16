import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useCommon from "../assets/hooks/useCommon";

const PrivateRoute = () => {
  const location = useLocation();
  const common = useCommon();
  const sessionUserInformation = common.sessionService();
  let user = false;

  /** login condition */
  let condition =
    sessionUserInformation.token != null &&
    (sessionUserInformation.role === "admin" ||
      sessionUserInformation.role === "user") &&
    sessionUserInformation.role !== null &&
    sessionUserInformation.email !== null;

  /** check condition */
  if (condition) {
    user = true;
  }

  /** if condition does not match then go to login page */
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
