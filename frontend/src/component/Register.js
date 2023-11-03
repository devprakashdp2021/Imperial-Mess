import React from 'react';

import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';


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
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="gmail"
        label="G-suite ID"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
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
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="Role">
        <Select>
          <Select.Option value="demo">Student</Select.Option>
          <Select.Option value="demo">Accountant</Select.Option>
          <Select.Option value="demo">Prof/Chief Warden</Select.Option>
          <Select.Option value="demo">Student Representative</Select.Option>
       </Select>
      </Form.Item>

      <Form.Item label="Hostel">
        <Select>
          <Select.Option value="demo">Tilak</Select.Option>
          <Select.Option value="demo">Malviya</Select.Option>
          <Select.Option value="demo">Tandon</Select.Option>
          <Select.Option value="demo">Patel</Select.Option>
          <Select.Option value="demo">Tagore</Select.Option>
       </Select>
      </Form.Item>
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;