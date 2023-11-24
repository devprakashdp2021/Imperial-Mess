import React, { useEffect,useState } from "react";
import { message } from "antd";
import RateMealCard from "./RateMealCard";
import {FetchMenu} from '../apicalls/MessMenuapi';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
let dateObj = new Date();

let month = String(dateObj.getMonth() + 1).padStart(2, "0");

let day = String(dateObj.getDate()).padStart(2, "0");

let year = dateObj.getFullYear();
let date = day + '/' + month + '/' + year;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(date);

function RateDailyMeal() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users);
  const [Breakfast,SetBreakfast]=useState("");
  const [Lunch,SetLunch]=useState("");
  const [Snack,SetSnack]=useState("");
  const [Dinner,SetDinner]=useState("");
  const [isloading,setLoading]=useState(true);

  const FetchTodayMeal=async()=>{
    try {
     dispatch(ShowLoading());
     setLoading(true);
      const response=await FetchMenu(user._id);
      if(response.success){
        dispatch(HideLoading());
        // console.log(response.data);
        console.log("day "+weekday[new Date().getDay()]);
        const today = new Date().toLocaleString('en-us', { weekday: 'long' });
        SetBreakfast(response.data[today].Breakfast);
        SetLunch(response.data[today].Lunch);
        SetSnack(response.data[today].Snack);
        SetDinner(response.data[today].Dinner);
       setLoading(false);
      }else{
       message.error(response.message);
      }
    } catch (error) {
     dispatch(HideLoading());
     message.error(error.message);
    }
  }
  useEffect(()=>{
    FetchTodayMeal();
  },[]);
  if(isloading){
     return <div>.....Loading.....</div>
  }
  return (
    <>
      <div>
        Day: {weekday[new Date().getDay()]}
        <br />
        Date: {date}
      </div>
      <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
      <RateMealCard title="Breakfast" content={Breakfast}/>
      <RateMealCard title="Lunch" content={Lunch} />
      <RateMealCard title="Snack" content={Snack}/>
      <RateMealCard title="Dinner" content={Dinner}/>
      </div>
    </>
  );
}
export default RateDailyMeal;
