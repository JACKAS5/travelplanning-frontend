import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/fakeAuth";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
