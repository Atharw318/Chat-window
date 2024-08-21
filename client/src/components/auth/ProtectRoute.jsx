import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute({ children, user, rediract = "/login" }) {
  if (!user) return <Navigate to={rediract} />;

  return children ? children : <Outlet />;
}

export default ProtectRoute;
