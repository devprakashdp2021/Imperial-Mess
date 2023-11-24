// src/components/FoodItem.js
import { Button, Input, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AddMessItem, RemoveMessItem } from '../apicalls/messItems';
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

let dateObj = new Date();
let month = String(dateObj.getMonth() + 1).padStart(2, "0");
let day = String(dateObj.getDate()).padStart(2, "0");
let year = dateObj.getFullYear();
let todayDate = day + "/" + month + "/" + year;

const FoodItem = ({ item, onItemChange, onItemRemove }) => {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onItemChange(item.id, { [name]: value });
  };
  
  const handleSaveItem = async () => {
    const { name, price, quantity } = item;
    // console.log(item);
    const values = {itemName: name, information: [{date: todayDate, quantity: quantity, price: price}]};  
    try {
      // console.log(values);
      dispatch(ShowLoading());
      let response = await AddMessItem(values);
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

  const handleRemoveItem = async () => {
    console.log((item.id));
    // try {
    //   // console.log(item);
    //   dispatch(ShowLoading());
    //   let response = await RemoveMessItem(item);
    //   if (response.success) {
    //     message.success(response.message);
    //   } else {
    //     message.error(response.message);
    //   }
    //   dispatch(HideLoading());
    // } catch (error) {
    //   dispatch(HideLoading());
    //   message.error(error.message);
    // }
    onItemRemove(item.id);
  };

  return (
    <div style={{display: "flex", padding: "10px"}}>
      <Input
        type="text"
        name="name"
        placeholder="Food Item"
        style={{marginRight: "10px"}}
        value={item.name}
        onChange={handleInputChange}
      />
       <Input
        type="number"
        name="quantity"
        placeholder="Quantity"
        style={{marginRight: "10px"}}
        value={item.quantity}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        name="price"
        placeholder="Price per unit"
        style={{marginRight: "10px"}}
        value={item.price}
        onChange={handleInputChange}
      />
      <Button style={{marginRight: "10px"}} onClick={handleSaveItem}>Save</Button>
      <Button onClick={handleRemoveItem}>Remove</Button>
      {/* <Button onClick={() => onItemRemove(item.id)}>Remove</Button> */}
    </div>
  );
};

export default FoodItem;
