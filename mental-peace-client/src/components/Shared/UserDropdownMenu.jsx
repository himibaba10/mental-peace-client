import { AuthContext } from "@/src/providers/AuthProvider";
import PrimaryButton from "@/src/utils/PrimaryButton";
import { useContext } from "react";
import { Link } from "react-router-dom";

const UserDropdownMenu = () => {
  const [authInfo] = useContext(AuthContext);
  const { logOut } = authInfo;
  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="bg-white p-5 drop-shadow absolute right-0 hidden group-hover:inline-flex flex-col gap-3 w-48">
      {authInfo.user.role === "user" && (
        <Link to="/user/dashboard">User Dashboard</Link>
      )}
      {authInfo.user.role === "blogger" && (
        <Link to="/blogger/dashboard">Blogger Dashboard</Link>
      )}
      {authInfo.user.role === "doctor" && (
        <Link to="/doctor/dashboard">Doctor Dashboard</Link>
      )}
      {authInfo.user.role === "admin" && (
        <Link to="/admin/dashboard">Admin Dashboard</Link>
      )}
      <PrimaryButton type="button" handleClick={handleLogout}>
        Log Out
      </PrimaryButton>
    </div>
  );
};

export default UserDropdownMenu;
