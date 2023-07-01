import { Avatar, Button, Col, Row, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { mergeStyleSets } from "@fluentui/merge-styles";
import { UserAddOutlined } from "@ant-design/icons";
import PageHeaderWithOutCompany from "../../Common/BreadCrumb";

export const MxStyles = mergeStyleSets({
  Space: {
    selectors: {
      ".ant-typography": {
        marginTop: "0.2em",
        marginBottom: "0.2em",
      },
      ".ant-space-item": {
        width: "100%",
        padding: "0px 15px 0px 0px",
      },
    },
  },
  Table: {
    selectors: {
      ".ant-table-pagination": {
        display: "flex",
        justifyContent: "center",
      },
      ".ant-table.ant-table-small .ant-table-tbody>tr>td": {
        padding: 4,
      },
      ".ant-table.ant-table-small .ant-table-thead>tr>th": {
        padding: 8,
      },
    },
  },
});

const ContactList = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users").then((res: any) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Space>
        <PageHeaderWithOutCompany Items={["Home", "Contact", "List"]} />
      </Space>
      <Space
        className={MxStyles.Space}
        style={{ width: "100%" }}
        size={10}
        direction="vertical"
      >
        <Row>
          <Col span={16}>
            <Typography.Title level={3}>Customers</Typography.Title>
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button type="primary" icon={<UserAddOutlined />}>
              Customer
            </Button>
          </Col>
        </Row>

        <Table
          size="small"
          className={MxStyles.Table}
          loading={loading}
          columns={[
            {
              title: "Photo",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "First Name",
              dataIndex: "firstName",
            },
            {
              title: "LastName",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },

            {
              title: "address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        />
      </Space>
    </>
  );
};
export default ContactList;
