import { Navigate, Outlet } from "react-router-dom";
import authImage from "../assets/auth image.jpg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Auth = () => {
  const [authInfo] = useContext(AuthContext);

  //If already logged in then redirect to home page
  if (authInfo.user?.email) return <Navigate to="/" />;

  return (
    <main className="flex min-h-screen">
      <div className="w-1/2 relative overflow-hidden">
        <img
          className="h-full w-full object-cover sticky top-0"
          src={authImage}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#a3004c4c]"></div>
      </div>
      <div className="w-1/2 bg-primary flex justify-center items-center py-10">
        <Outlet />
      </div>
    </main>
  );
};

export default Auth;
