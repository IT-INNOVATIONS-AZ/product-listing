import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Flex, Menu, Space, Switch, Typography } from "antd";
import React, { useState } from "react";
import { useStore } from "../../hook/useStore";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const { setDark, isDark } = useStore();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ padding: 10 }}
    >
      <Flex justify="space-between" align="center" style={{ width: "100%" }}>
        <div>
          <Typography.Title level={4}>Product Listing</Typography.Title>
        </div>
        <Flex align="center">
          <Menu.Item>
            <Flex>
              <Switch
                checked={isDark}
                onChange={() => {
                  setDark();
                  localStorage.setItem("isDark", !isDark);
                }}
                checkedChildren={<BsFillMoonStarsFill />}
                unCheckedChildren={<BsFillSunFill />}
                style={{
                  paddingTop: 2,
                }}
              />
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Typography>
              <Space size="small" direction="horizontal">
                Vaqif Gulmammadov
                <Avatar
                  style={{ backgroundColor: "green", verticalAlign: "middle" }}
                  size="large"
                >
                  V
                </Avatar>
              </Space>
            </Typography>
          </Menu.Item>
        </Flex>
      </Flex>
    </Menu>
  );
};

export default Navbar;
