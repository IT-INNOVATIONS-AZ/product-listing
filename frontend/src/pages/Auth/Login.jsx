import { Card, Flex, Input, Space, Button, Typography } from "antd";
import BgImg from "../../assets/img/bg.jpg";
import { useForm } from "react-hook-form";
import { useLogin } from "../../api/user";
import { useNavigate } from "react-router-dom";
const boxStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
};

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { mutateAsync: userLogin, data } = useLogin();
  const navigate = useNavigate();
  const onLogin = async ({ email, password }) => {
    await userLogin({ email, password })
      .then(() => {
        if (data?.jwtToken) {
          localStorage.setItem("token", data.jwtToken);
        }
      })
      .then(() => navigate("/dashboard"));
  };
  return (
    <Flex style={boxStyle} align="center" justify="center">
      <Card title="Login" bordered={false} style={{ width: 500, padding: 20 }}>
        <Space size="middle" direction="vertical" style={{ width: "100%" }}>
          <form onSubmit={handleSubmit(onLogin)}>
            <input type="text" placeholder="Email" {...register("email")} />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <Flex justify="space-between" align="center">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Typography.Link href="/forgot-password">
                Fogot Password
              </Typography.Link>
            </Flex>
          </form>
        </Space>
      </Card>
    </Flex>
  );
};

export default Login;
