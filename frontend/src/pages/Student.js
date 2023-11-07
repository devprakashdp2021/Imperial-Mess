import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import RegisterComplaints from "../components/RegisterComplaints";
import ViewAllComplaints from "../components/ViewAllComplaints";
import ViewMessMenu from "../components/ViewMessMenu";
import RateDailyMeal from "../components/RateDailyMeal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
const Student = () => {
  const {user} = useSelector((state) => state.users);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [option, setOption] = useState("1");
  function handleLogout(event) {
    localStorage.removeItem("token");
    navigate("/login");
  }
  function handleChangeOption(event) {
    console.log(event.key);
    setOption(event.key);
  }
  return (
    <Layout style={{ height: "100vh" }}>
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
          onSelect={handleChangeOption}
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
          <p style={{ fontSize: "25px", display: "inline" }}>{user?user.name:"NAME"}</p>
          <Button
             
            style={{ float: "right", margin: "15px" }}
            type="primary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "auto",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
            }}
          >
            {option === "1" && <RegisterComplaints />}
            {option === "2" && <ViewAllComplaints buttonFor="student"/>}
            {option === "3" && <ViewMessMenu />}
            {option === "4" && <RateDailyMeal />}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Imperial Mess ©2023 Created by Team Never_Give_Up
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Student;
