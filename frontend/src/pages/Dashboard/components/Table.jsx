import React from "react";
import { Space, Table } from "antd";
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "isInStock",
    dataIndex: "isInStock",
    key: "isInStock",
  },
  {
    title: "discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "review",
    dataIndex: "review",
    key: "review",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    img: "https://img.freepik.com/premium-photo/cute-baby-panda-bear-with-big-eyes-3d-rendering-cartoon-illustration_691560-4917.jpg",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
];
const ProductTable = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <Space size="middle" direction="vertical">
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
          <img src={record.img} alt="panda" width={320} />
        </Space>
      ),
      rowExpandable: (record) => record.name !== "Not Expandable",
    }}
    dataSource={data}
  />
);
export default ProductTable;
