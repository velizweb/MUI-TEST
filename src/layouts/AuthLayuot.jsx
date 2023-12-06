import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayuot = () => {
  const { user } = useAuthContext();

  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthLayuot;
