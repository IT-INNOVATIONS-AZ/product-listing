import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Flex, Menu, Space, Typography } from "antd";
import React, { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Flex justify="space-between" align="center" style={{ width: "100%" }}>
        <div>
          <Typography.Title level={4}>Product Listing</Typography.Title>
        </div>
        <div>
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
        </div>
      </Flex>
    </Menu>
  );
};

export default Navbar;
