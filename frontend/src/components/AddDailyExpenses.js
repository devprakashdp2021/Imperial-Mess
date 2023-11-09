import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";

function AddDailyExpenses() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handlePrice(e){
     if(quantity){
      setPrice(e.target.value);
      setTotalPrice(quantity*(e.target.value));
     }
  }

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "item"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing item name",
                      },
                    ]}
                  >
                    <Input placeholder="Item Name" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "quantity"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing quantity",
                      },
                    ]}
                  >
                    <Input
                      value={quantity}
                      placeholder="Item Quantity"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "price"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing item price",
                      },
                    ]}
                  >
                    <Input
                      value={price}
                      placeholder="Item price(kg/l)"
                      onChange={handlePrice}
                    />
                 
                  </Form.Item>

                  {quantity!==0 && price!==0 && (
                    <Form.Item
                      {...restField}
                      name={[name, "totalPrice"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing total price",
                        },
                      ]}
                    >
                      <Input value={totalPrice} placeholder={'Rs. ' + totalPrice} />
                    </Form.Item>
                  )}

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add more item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={onFinish}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default AddDailyExpenses;
