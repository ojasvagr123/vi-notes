import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactElement } from "react";

export default function ProtectedRoute({ children }: { children: ReactElement }) {
  const { token, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: "40px" }}>Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}