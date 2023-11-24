import React, { useEffect,useState } from "react";
import { Card, Col, Row,message } from "antd";
import { Rate } from 'antd';
import RateMealCard from "./RateMealCard";
import {FetchMenu} from '../apicalls/MessMenuapi';
import { FetchRating } from "../apicalls/Foodratingapi";
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
let dateObj = new Date();

let month = String(dateObj.getMonth() + 1).padStart(2, "0");

let day = String(dateObj.getDate()).padStart(2, "0");

let year = dateObj.getFullYear();
let date = day + '/' + month + '/' + year;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(date);
// const FetchTodayMeal=async()=>{
//   try {
//    dispatch(ShowLoading());
//   //  setLoading(true);
//     const response=await FetchMenu(user._id);
//     if(response.success){
//       dispatch(HideLoading());
      
//      // console.log(response.data)
//     //  setLoading(false);
//     }else{
//      message.error(response.message);
//     }
//   } catch (error) {
//    dispatch(HideLoading());
//    message.error(error.message);
//   }
// }
// useEffect(()=>{
//   FetchTodayMeal();
// },[]);
function RateDailyMeal() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users);
  const [Breakfast,SetBreakfast]=useState("");
  const [Lunch,SetLunch]=useState("");
  const [Snack,SetSnack]=useState("");
  const [Dinner,SetDinner]=useState("");
  const [isloading,setLoading]=useState(true);
//   const[rating1,setrating1]=useState(0);
//   const[rating2,setrating2]=useState(0);
//   const[rating3,setrating3]=useState(0);
//   const[rating4,setrating4]=useState(0);
//   const FetchRatingofMeal=async(values)=>{
//     try{
//       setLoading(true);
//       dispatch(ShowLoading());
//       const response=await FetchRating(values,user._id);
//       if(response.success){
        
//         dispatch(HideLoading());
//         console.log("response",response.data.rating);
//          if(type==="Breakfast"){
//             setrating1(response.data.rating);
//          }else if(type==="Lunch"){
//           setrating2(response.data.rating);
//          }else if(type==="Snack"){
//             setrating3(response.data.rating);
//          }else{
//           setrating4(response.data.rating);
//          }
//         // console.log("foodrating", foodrating);
//         setLoading(false);
//       }else{
//         dispatch(HideLoading());
//         message.error(response.message);
//       }
//   }catch(error){
//     dispatch(HideLoading());
//     message.error(error.message);
//   }
// }

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
        // FetchRatingofMeal(response.data[today].Breakfast,"Breakfast");
        SetLunch(response.data[today].Lunch);
        //  FetchRatingofMeal(response.data[today].Lunch,"Lunch");
        SetSnack(response.data[today].Snack);
        // FetchRatingofMeal(response.data[today].Snack,"Snack");
        SetDinner(response.data[today].Dinner);
        // FetchRatingofMeal(response.data[today].Dinner,"Dinner");
        // console.log("rating",foodrating.Lunch);
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
    
    {/* {console.log("rating",rating1, rating2, rating3, rating4)} */}
    
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
