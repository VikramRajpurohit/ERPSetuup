import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { mergeStyleSets } from '@fluentui/merge-styles';
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              className={MxStyles.icon}
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
              }}
            />
          }
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              className={MxStyles.icon}
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              className={MxStyles.icon}
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
              }}
            />
          }
          title={"Customer"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              className={MxStyles.icon}
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
    </Space>
  );
}

export const MxStyles = mergeStyleSets({
  card: {
    width: 300,
    selectors: {
      '.ant-space': {
        display: 'flex',
        flexDirection: 'column'
      },
      '.ant-space-item': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }
  },
  icon: {
    borderRadius: 40,
    fontSize: 45,
    padding: 10,
  },
  statistic: {
    selectors: {
      '.ant-statistic-title': {
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center'
      },
      '.ant-statistic-content': {
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center'
      },
    }
  }
})

function DashboardCard({ title, value, icon }) {
  return (
    <Card className={MxStyles.card}>
      <Space direction="horizontal">
        {icon}
        <Statistic className={MxStyles.statistic} title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Dashboard;
