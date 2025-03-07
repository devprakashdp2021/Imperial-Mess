import React, { useEffect } from "react";

import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Login = ({ handleRegisterNow }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      console.log(values);
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        console.log(response.data);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="login"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="gsuiteid"
        label="G-suite ID"
        rules={[
          {
            required: true,
            message: "Please input your g-suite id!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
      <div style={{ textAlign: "right", marginTop: "8px" }}>
            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <br />
        Or{" "}
        <Link to="" onClick={handleRegisterNow}>
          register now!
        </Link>
      </Form.Item>
    </Form>
  );
};
export default Login;
