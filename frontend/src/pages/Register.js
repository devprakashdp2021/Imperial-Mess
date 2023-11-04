import React from 'react';

import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import Link from 'antd/es/typography/Link';


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
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
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
const Register = ({handleLoginNow}) => {
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
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gmail"
        label="G-suite ID"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid g-suite id',
          },
          {
            required: true,
            message: 'Please input your g-suite id!',
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

      <Form.Item 
      name="role"
      label="Role"
      rules={[
        {
          required: true,
          message: 'Please select your role!',
        },
      ]}
      hasFeedback
      >
        <Select>
          <Select.Option value="demo">Student</Select.Option>
          <Select.Option value="demo">Accountant</Select.Option>
          <Select.Option value="demo">Prof/Chief Warden</Select.Option>
          <Select.Option value="demo">Student Representative</Select.Option>
       </Select>
      </Form.Item>

      <Form.Item 
      style={{marginBottom: "10px"}}
      name="hostel"
      label="Hostel"
      rules={[
        {
          required: true,
          message: 'Please select your hostel!',
        },
      ]}
      hasFeedback>
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
        <br />
        Or <Link to="" onClick={handleLoginNow}>Login!</Link>
        
      </Form.Item>
    </Form>
    
  );
};
export default Register;