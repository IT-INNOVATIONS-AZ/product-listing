import { Card, Flex, Input, Space, Button, Typography } from "antd";
import BgImg from "../../assets/img/bg.jpg";
const boxStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
};

const Register = () => {
  return (
    <Flex style={boxStyle} align="center" justify="center">
      <Card
        title="Register"
        bordered={false}
        style={{ width: 500, padding: 20 }}
      >
        <Space size="middle" direction="vertical" style={{ width: "100%" }}>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="surname" placeholder="Surname" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <Flex justify="space-between" align="center">
            <Button type="primary">Login</Button>
            <Typography.Link>Fogot Password</Typography.Link>
          </Flex>
        </Space>
      </Card>
    </Flex>
  );
};

export default Register;
