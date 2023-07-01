import {
  BellOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Card,
  Drawer,
  List,
  Popover,
  Space,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/comments").then((res: any) => {
      setComments(res.comments);
    });
    fetch("https://dummyjson.com/carts/1").then((res: any) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Space>
        <img src="/images/marketixsvg.png" alt="Marketix Logo" width="40" />
        <label style={{ color: "#00a39f", fontSize: 23,fontWeight:'bold' }}>
          Marketix
        </label>
      </Space>
      <Search
        placeholder="Search"
        allowClear
        style={{ width: 250, height: 30 }}
      />
      <label>Admin User</label>
      <Space size={20}>
        <Badge count={4}>
          <BellOutlined
            style={{ fontSize: 18 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <SettingOutlined
          style={{ fontSize: 18 }}
          onClick={() => {
            setNotificationsOpen(true);
          }}
        />
        <Popover
          content={
            <>
              <Card
                style={{ width: 300, border: "none" }}
                cover={
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                      style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                      size={80}
                    >
                      <label style={{ fontSize: 40 }}>A</label>
                    </Avatar>
                  </div>
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <label style={{ color: "#000000E0", fontSize: 14 }}>
                    Admin User
                  </label>
                  <label style={{ color: "#00000073", fontSize: 14 }}>
                    test@admin@gmail.com
                  </label>
                </div>
              </Card>
            </>
          }
          trigger="click"
          open={showUser}
          onOpenChange={() => setShowUser(!showUser)}
          placement="bottomRight"
        >
          <Avatar
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
              cursor: "pointer",
            }}
          >
            A
          </Avatar>
        </Popover>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item: any) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item: any) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
