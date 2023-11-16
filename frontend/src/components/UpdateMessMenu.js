import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
const originData = [
  {
    key: "1",
    day: "Monday",
    breakfast: "Idli, Sambar, Milk Bournvita",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
  {
    key: "2",
    day: "Tuesday",
    breakfast: "Aloo Paratha, Curd, Pickle",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
  {
    key: "3",
    day: "Wednesday",
    breakfast: "Sandwich, Milk Bournvita",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
  {
    key: "4",
    day: "Thursday",
    breakfast: "Paneer Paratha, Curd, Pickle",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
  {
    key: "5",
    day: "Friday",
    breakfast: "Sambhar Vada, Milk Bournvita",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
  {
    key: "6",
    day: "Saturday",
    breakfast: "Chola Samosa, Milk Bournvita",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
  {
    key: "7",
    day: "Sunday",
    breakfast: "Poha Jalebi, Milk Bournvita",
    lunch: "Rice, Daal, Sabji, Curd, Salad",
    supper: "Chai, Samosa",
    dinner: "Roti, Sabji, Gulaabjamun",
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      day: "",
      breakfast: "",
      lunch: "",
      supper: "",
      dinner: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "Day",
      dataIndex: "day",
      width: "15%",
    },
    {
      title: "Breakfast",
      dataIndex: "breakfast",
      width: "20%",
      editable: true,
    },
    {
      title: "Lunch",
      dataIndex: "lunch",
      width: "20%",
      editable: true,
    },
    {
      title: "Supper",
      dataIndex: "supper",
      width: "20%",
      editable: true,
    },
    {
      title: "Dinner",
      dataIndex: "dinner",
      width: "20%",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
    
  });
  return (
    <>
<Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
    <Button type="primary" style={{margin:"15px"}} onClick={()=>console.log(data)}>Save Menu</Button>
    </>
    
  );
};
export default App;
