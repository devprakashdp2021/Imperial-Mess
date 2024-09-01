import React from "react";
import Slide from "./Slide";
import "./home.css";

import { Button, Form, Input, message } from "antd";
import { ForgotPasswordUser } from "../apicalls/users";
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
function ForgotPassword() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await ForgotPasswordUser(values);
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div className="home">
      <h1 style={{ fontSize: 30, margin: "0px", fontFamily: "Dancing Script" }}>
        Imperial Mess
      </h1>
      <Slide />
      <div style={{ margin: "10px auto", width: "50%" }}>
        <Form
          {...formItemLayout}
          form={form}
          name="forgot-password"
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

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPassword;
