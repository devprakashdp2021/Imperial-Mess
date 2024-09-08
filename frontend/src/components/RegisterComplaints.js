import React, { useState } from "react";
import { Button, Form, Input, Select, Space, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RegisterComplaint } from "../apicalls/complaints";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

function RegisterComplaints() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [complaintType, setComplaintType] = useState("");

  const onFinish = async (values) => {
    values.owner = user._id;
    values.hostel = user.hostel;
    console.log(values);
    try {
      dispatch(ShowLoading());
      let response = await RegisterComplaint(values);
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

  const handleComplaintType = (value) => {
    console.log('Selected complaint type:', value);
    setComplaintType(value);
  };

  return (
    <div>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="complaintType"
          label="Complaint Type"
          hasFeedback
          rules={[{ required: true, message: "Please select your complaint type!" }]}
        >
          <Select
            placeholder="Please select a complaint type"
            onChange={handleComplaintType}
            value={complaintType}
          >
            <Option value="Mess Problem">Mess Problem</Option>
            <Option value="Hostel Problem">Hostel Problem</Option>
          </Select>
        </Form.Item>

        {complaintType === "Mess Problem" && (
          <Form.Item
            name="complaint"
            label="Complaint"
            hasFeedback
            rules={[{ required: true, message: "Please select your complaint!" }]}
          >
            <Select placeholder="Please select a complaint">
              <Option value="food-quality">Food Quality</Option>
              <Option value="mess-timing">Mess Timing</Option>
              <Option value="cleanliness-of-utensils">Cleanliness of Utensils</Option>
              <Option value="behaviour-of-mess-worker">Behaviour of Mess Worker</Option>
            </Select>
          </Form.Item>
        )}

        {complaintType === "Hostel Problem" && (
          <Form.Item
            name="complaint"
            label="Complaint"
            hasFeedback
            rules={[{ required: true, message: "Please select your complaint!" }]}
          >
            <Select placeholder="Please select a complaint">
              <Option value="internet-problem">Internet Problem</Option>
              <Option value="water-cooler-problem">Water Cooler Problem</Option>
              <Option value="room-issue">Room Issue</Option>
              <Option value="premises-cleanliness">Premises Cleanliness</Option>
            </Select>
          </Form.Item>
        )}

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please input description" }]}
        >
          <Input.TextArea showCount rows={8} maxLength={500} />
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterComplaints;
