import { ConfigProvider, theme } from "antd";
import { useRoutes } from "react-router-dom";
import { useStore } from "../hook/useStore";
import MemberLayout from "../layout/member";
import ForgotPassword from "./Auth/ForgotPassword";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./Dashboard";

const Pages = () => {
  const { isDark } = useStore();

  const { darkAlgorithm, defaultAlgorithm } = theme;

  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/",
      element: <MemberLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return (
    <ConfigProvider
      theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
    >
      {routes}
    </ConfigProvider>
  );
};

export default Pages;
