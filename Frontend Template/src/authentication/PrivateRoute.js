import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useCommon from "../assets/hooks/useCommon";

const PrivateRoute = () => {
  const location = useLocation();
  const common = useCommon();
  const sessionUserInformation = common.sessionService();
  let user = false;
  console.log(sessionUserInformation, !user, "session from private route");
  let condition =
    sessionUserInformation.token != null &&
    (sessionUserInformation.role === "admin" ||
      sessionUserInformation.role === "user") &&
    sessionUserInformation.role !== null &&
    sessionUserInformation.email !== null;
  if (condition) {
    user = true;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
