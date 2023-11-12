import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MemberLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MemberLayout;
