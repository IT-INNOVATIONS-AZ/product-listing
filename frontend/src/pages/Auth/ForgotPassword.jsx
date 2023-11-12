import { Card, Flex, Input, Space, Button, Typography } from "antd";
import BgImg from "../../assets/img/bg.jpg";
const boxStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
};

const ForgotPassword = () => {
  return (
    <Flex style={boxStyle} align="center" justify="center">
      <Card
        title="Forgot Password"
        bordered={false}
        style={{ width: 500, padding: 20 }}
      >
        <Space size="middle" direction="vertical" style={{ width: "100%" }}>
          <Input type="email" placeholder="Email" />
          <Flex justify="space-between" align="center">
            <Button type="primary">Forgot Password</Button>
          </Flex>
        </Space>
      </Card>
    </Flex>
  );
};

export default ForgotPassword;
