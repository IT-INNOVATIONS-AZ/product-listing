import React from "react";
import PieChart from "./components/PieChart";
import { Card, Col, Flex, Row } from "antd";
import Table from "./components/Table";
import WsConnect from "./components/WsConnect";

const Dashboard = () => {
  return (
    <Row
      justify="space-between"
      align="center"
      style={{ marginTop: 10, padding: 10 }}
    >
      <Col span={9}>
        <Card title="Pie Chart">
          <PieChart />
        </Card>
      </Col>
      <Col span={14}>
        <Card title="Product Items">
          <Table />
        </Card>
        <WsConnect />
      </Col>
    </Row>
  );
};

export default Dashboard;
