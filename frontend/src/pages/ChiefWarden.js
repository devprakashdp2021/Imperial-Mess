import React, { useState } from "react";
import { Button, Flex, Layout, Menu, theme } from "antd";
import ViewAllComplaints from "../components/ViewAllComplaints";
import UpdateMessMenu from "../components/UpdateMessMenu";
import ViewAllStudents from "../components/ViewAllStudents";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const ChiefWarden = () => {
  const navigate = useNavigate();
  function handleLogout(event) {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const {user} = useSelector((state) => state.users);
  const [option, setOption] = useState('1');
  function handleChangeOption(event){
    console.log(event.key)
    setOption(event.key)
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
          items={["View Complaint", "View Mess Menu", "View All Students"].map(
            (item, index) => ({
              key: String(index + 1),
              label: item,
            })
          )}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            <p style={{fontSize:"25px", display:"inline"}}>{user.name?user.name:"Name"}</p>
            <Button style={{float:"right", margin:"15px"}}type="primary" onClick={handleLogout}>Logout</Button> 
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
            {option === "1" && <ViewAllComplaints buttonFor="chiefWarden" />}
            {option === "2" && <UpdateMessMenu />}
            {option === "3" && <ViewAllStudents buttonFor="chiefWarden" />}
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
export default ChiefWarden;
