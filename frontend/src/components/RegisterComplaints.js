import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Upload,
} from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const RegisterComplaints = () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    //   border: "1px solid red",
    }}
  >
   
    <Form.Item
      name="complaint type"
      label="Complaint Type"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your complaint type!',
        },
      ]}
    >
      <Select placeholder="Please select a complaint type">
        <Option value="mess">Mess Problem</Option>
        <Option value="hostel">Hostel Problem</Option>
      </Select>
    </Form.Item>

    <Form.Item
      name="complaint"
      label="Complaint"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your complaint!',
        },
      ]}
    >
      <Select placeholder="Please select a complaint">
        <Option value="food-quality">Food Quality</Option>
        <Option value="mess-timing">Mess Timing</Option>
        <Option value="cleanliness-of-utensils">Cleanliness of Utensils</Option>
        <Option value="behaviour-of-mess-worker">Behaviour of Mess Worker</Option>
      </Select>
    </Form.Item>

    <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please input description',
          },
        ]}
      >
        <Input.TextArea showCount rows="8" maxLength={500} />
      </Form.Item>

    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra=".jpg"
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
  </Form>
);
export default RegisterComplaints;