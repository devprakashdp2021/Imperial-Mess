import React,{useState,useEffect} from 'react';

import {
  Button,
  Form,
  Input,
  Select,
  message,
} from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import { RegisterUser } from '../apicalls/users';
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/loadersSlice"

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
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const onFinish = async (values) => {
    console.log(values)
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading());
      if(response.success){
        message.success(response.message);
        // navigate("/login");
        handleLoginNow()
      }else{
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }
 useEffect(()=>{
  if(localStorage.getItem("token")){
    navigate("/");
  }
 })


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
        name="gsuiteid"
        label="G-suite ID"
        rules={[
          // {
          //   type: 'email',
          //   message: 'The input is not valid g-suite id',
          // },
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
          <Select.Option value="Student">Student</Select.Option>
          <Select.Option value="Accountant">Accountant</Select.Option>
          <Select.Option value="Prof/Chief Warden">Prof/Chief Warden</Select.Option>
          <Select.Option value="Student Representative">Student Representative</Select.Option>
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
          <Select.Option value="Tilak">Tilak</Select.Option>
          <Select.Option value="Malviya">Malviya</Select.Option>
          <Select.Option value="Tandon">Tandon</Select.Option>
          <Select.Option value="Patel">Patel</Select.Option>
          <Select.Option value="Tagore">Tagore</Select.Option>
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