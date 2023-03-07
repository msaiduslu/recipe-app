import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ currentUser }) => {
  const isSigned = Boolean(currentUser);
  return <div>{isSigned ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
