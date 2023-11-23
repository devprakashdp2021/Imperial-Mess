// src/components/FoodItem.js
import React from 'react';
import "./DailyExpenses.css";
import { Button, Input } from 'antd';

const FoodItem = ({ item, onItemChange, onItemRemove }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

   // Validate quantity and price to ensure they are not below zero
    const newValue = name === 'quantity' || name === 'price' ? Math.max(0, parseFloat(value)) : value;

    onItemChange(item.id, { [name]: newValue });
  };

  return (
    <div className='item'>
      <Input
        type="text"
        name="name"
        placeholder="Food Item"
        value={item.name}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={item.quantity}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        name="price"
        placeholder="Price"
        value={item.price}
        onChange={handleInputChange}
      />
      <Button onClick={() => onItemRemove(item._id)}>Remove</Button>
    </div>
  );
};

export default FoodItem;
