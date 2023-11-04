import React from "react";
import { Button, Flex, Layout, Menu, theme } from "antd";
import RegisterComplaints from "../components/RegisterComplaints";
import ViewAllComplaints from "../components/ViewAllComplaints";
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{ margin: "70px auto auto" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            "Register Complaint",
            "View Complaint",
            "View Mess Menu",
            "Rate daily Meal",
          ].map((item, index) => ({
            key: String(index + 1),
            label: item,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            <p style={{fontSize:"25px", display:"inline"}}>Name</p>
            <Button style={{float:"right", margin:"15px"}}type="primary">Logout</Button> 
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "scroll",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
            }}
          >
            {/* <RegisterComplaints /> */}
            <ViewAllComplaints />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
