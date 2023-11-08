import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function AddDailyExpenses(){
    const [oneItemPrice, setOneItemPrice] = useState(0);
    function handleItemPrice(){ 
        setOneItemPrice(oneItemPrice+1);
        console.log(oneItemPrice);
       
    }
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        console.log(values.users);
        if(values.users){
        console.log(values.users[0].price);
        // values.users[0].totalPrice = values.users[0].quantity*values.users[0].price;
        }

        // handleItemPrice();
      };
    return(
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
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'item']}
                rules={[
                  {
                    required: true,
                    message: 'Missing item name',
                  },
                ]}
              >
                <Input placeholder="Item Name" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'quantity']}
                rules={[
                  {
                    required: true,
                    message: 'Missing quantity',
                  },
                ]}
              >
                <Input placeholder="Item Quantity" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'price']}
                rules={[
                  {
                    required: true,
                    message: 'Missing item price',
                  },
                ]}
              >
                <Input placeholder="Item price(kg/l)" value={oneItemPrice} onChange={handleItemPrice}/>
              </Form.Item>
              
              {oneItemPrice===1 &&  <Form.Item
                {...restField}
                name={[name, 'totalPrice']}
                rules={[
                  {
                    required: true,
                    message: 'Missing total price',
                  },
                ]}
              >
                <Input placeholder="Total Price"/>
              </Form.Item>}
             
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
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
 
};
export default AddDailyExpenses;