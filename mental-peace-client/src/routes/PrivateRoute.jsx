import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader1 from "../components/Shared/Loader1";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [authInfo] = useContext(AuthContext);

  if (authInfo.loading) return <Loader1 />;

  //   If not logged in, redirect to the login page
  if (!authInfo.user) return <Navigate to="/auth/login" />;

  return children;
};

export default PrivateRoute;
