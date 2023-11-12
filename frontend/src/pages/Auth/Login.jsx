import { Card, Flex, Input, Space, Button, Typography } from "antd";
import BgImg from "../../assets/img/bg.jpg";
const boxStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
};

const Login = () => {
  return (
    <Flex style={boxStyle} align="center" justify="center">
      <Card title="Login" bordered={false} style={{ width: 500, padding: 20 }}>
        <Space size="middle" direction="vertical" style={{ width: "100%" }}>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Flex justify="space-between" align="center">
            <Button type="primary">Login</Button>
            <Typography.Link href="/forgot-password">
              Fogot Password
            </Typography.Link>
          </Flex>
        </Space>
      </Card>
    </Flex>
  );
};

export default Login;
