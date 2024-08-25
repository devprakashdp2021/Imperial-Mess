import { Button, Input, message } from 'antd';
import React, { useState } from 'react';
import BarGraph from './BarGraph';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch } from 'react-redux';
import { GetMessItem } from '../apicalls/messItems';


const TrackExpense = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    itemName: '',
    startDate: '',
    endDate: '',
  });

  const [data, setData] = useState({
    itemName: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (date) => {
    const inputDate = new Date(date);
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1; // Months are zero-based
    const year = inputDate.getFullYear();
    
    // Ensure two digits for day and month
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    
    const formattedDateString = `${formattedDay}/${formattedMonth}/${year}`;
    return formattedDateString;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     const values = {itemName: formData.itemName, startDate: formatDate(formData.startDate), 
      endDate: formatDate(formData.endDate)};
    
    try {
      console.log(values);
      dispatch(ShowLoading());
      let response = await GetMessItem(values.itemName);
      if (response.success) {
        message.success(response.message);
        setData(response.data.information);
        console.log(response.data.information);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <h2>Track Expenses</h2>
      <form style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
       onSubmit={handleSubmit}>
        <label className="form-label">
          Item Name:
          <Input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Starting Date:
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Ending Date:
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <Button style={{position: "relative", top: "10px", left: "5px"}} type="primary" 
        onClick={handleSubmit} className="form-button">
          Submit
        </Button>
      </form>
      <div style={{boxSizing: "border-box", marginTop: "50px", marginLeft: "-50px", overflow: "auto", overflowY: "hidden"}} >
      <BarGraph values={data} startDate={formatDate(formData.startDate)} endDate={formatDate(formData.endDate)}/>
      </div>
     
    </div>
  );
};

export default TrackExpense;
