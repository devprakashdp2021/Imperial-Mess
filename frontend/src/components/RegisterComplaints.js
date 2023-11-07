import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
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


function RegisterComplaints() {
  const [complaintType, setComplaintType] = useState("");

  
  function handleComplaintType(value) {
    console.log(value)
    setComplaintType(value);
  }


  return (
    <div>
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
      <Select placeholder="Please select a complaint type" 
      onChange={handleComplaintType} value={complaintType}>
        <Option value="mess" name="mess">Mess Problem</Option>
        <Option value="hostel" name="hostel">Hostel Problem</Option>
      </Select>
    </Form.Item>

   {complaintType === "mess" && <Form.Item
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
    </Form.Item>}

    {complaintType === "hostel" && <Form.Item
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
        <Option value="internet-problem">Internet Problem</Option>
        <Option value="water-cooler-problem">Water Cooler Problem</Option>
        <Option value="room-issue">Room Issue</Option>
        <Option value="premises-cleanliness">Premises Cleanliness</Option>
      </Select>
    </Form.Item>}
    

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
    </div>
  ); 

};
export default RegisterComplaints;