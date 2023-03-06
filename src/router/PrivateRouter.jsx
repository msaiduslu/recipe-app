import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ login }) => {
  const isSigned = false;
  console.log(login);
  return <div>{isSigned ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
