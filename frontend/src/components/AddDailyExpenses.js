import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { Button, message } from 'antd';
import { AddMessDailyExpense } from '../apicalls/messDailyExpenses';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch } from 'react-redux';

let dateObj = new Date();
let month = String(dateObj.getMonth() + 1).padStart(2, "0");
let day = String(dateObj.getDate()).padStart(2, "0");
let year = dateObj.getFullYear();
let date = day + "/" + month + "/" + year;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(date);

const App = () => {
  const dispatch = useDispatch();
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

  const handleSubmit = async () => {
    let totalAmount = calculateTotal();
    const values = {date: date,  items: foodItems, totalAmount: totalAmount};
     
    try {
      console.log(values);
      dispatch(ShowLoading());
      let response = await AddMessDailyExpense(values);
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
  }

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
    <>
      <div>
        Day: {weekday[new Date().getDay()]}
        <br />
        Date: {date}
      </div>
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
      <Button style={{margin: "10px"}} onClick={handleAddItem}>Add Item</Button>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
      <div>
        <h2>Total: Rs. {calculateTotal()}</h2>
      </div>
    </div>
    </>
    
  );
};

export default App;
