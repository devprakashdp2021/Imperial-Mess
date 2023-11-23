// src/App.js
import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { Button } from 'antd';

const App = () => {
  const [foodItems, setFoodItems] = useState([]);

  const handleItemChange = (id, updatedItem) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  const handleAddItem = () => {
    setFoodItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), name: '', price: 0, quantity: 1 },
    ]);
  };

  const handleRemoveItem = (id) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const total = foodItems.reduce((acc, item) => {
      const itemTotal = item.price * item.quantity;
  
      // Check if itemTotal is a valid number (not NaN or undefined)
      if (!isNaN(itemTotal) && itemTotal !== undefined) {
        return acc + itemTotal;
      }
  
      return acc;
    }, 0);
  
    // Check if the total is a valid number (not NaN or undefined)
    return !isNaN(total) && total !== undefined ? total : 0;
  };

  return (
    <div>
      <h1>Daily Mess Expenses</h1>
      {foodItems.map((item) => (
        <FoodItem
          key={item.id}
          item={item}
          onItemChange={handleItemChange}
          onItemRemove={handleRemoveItem}
        />
      ))}
      <Button onClick={handleAddItem}>Add Item</Button>
      <div>
        <h2>Total: Rs. {calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default App;
