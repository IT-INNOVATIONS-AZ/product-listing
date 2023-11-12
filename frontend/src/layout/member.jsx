import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
const MemberLayout = () => {
  return (
    <Layout.Content>
      <Navbar />
      <Outlet />
    </Layout.Content>
  );
};

export default MemberLayout;
