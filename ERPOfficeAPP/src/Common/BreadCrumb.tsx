import { Breadcrumb } from "antd";
import React from "react";

interface IBreadCrumbItems {
  Items: string[];
}

const PageHeaderWithOutCompany = ({ Items }: IBreadCrumbItems) => {
  return (
    <>
      <div>
        <Breadcrumb>
          {/* <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item menu={{ items }}>General</Breadcrumb.Item>
          <Breadcrumb.Item>Button</Breadcrumb.Item> */}
          {Items.map((i: any) => {
            return (
              <>
                <Breadcrumb.Item>{i}</Breadcrumb.Item>
              </>
            );
          })}
        </Breadcrumb>
      </div>
    </>
  );
};
export default PageHeaderWithOutCompany;
