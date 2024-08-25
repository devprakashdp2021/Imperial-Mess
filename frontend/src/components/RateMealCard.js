import { Card, Rate ,message} from 'antd'
import React, { useState,useEffect } from 'react'
import { AddRating } from '../apicalls/Foodratingapi';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRating } from '../apicalls/Foodratingapi';
function RateMealCard(props) {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users);
    const [rating, setRating] = useState(0);
    const [isloading,setLoading]=useState(true);
    const FetchRatingofMeal=async()=>{
      try{
        setLoading(true);
        dispatch(ShowLoading());
        const response=await FetchRating(props.content,user._id);
        if(response.success){
          
          dispatch(HideLoading());
          console.log("response",response.data.rating);
          setRating(response.data.rating);
          setLoading(false);
        }else{
          dispatch(HideLoading());
          message.error(response.message);
        }
    }catch(error){
      dispatch(HideLoading());
      message.error(error.message);
    }
  }
    async function handleRating(value) {
       try{
        setRating(value);
        dispatch(ShowLoading());
         const response=await AddRating({foodname:props.content,id:user._id,rating:value});
         console.log(response);
         if(response.success){
          dispatch(HideLoading());
        }else{
         message.error(response.message);
        }
       }catch(error){
        dispatch(HideLoading());
        message.error(error.message);
        }
    }
    useEffect(()=>{
      FetchRatingofMeal();
    },[]);
  if(isloading){
    return ;
  }
  return (
    <div style={{ background: '#ECECEC', padding: '20px' , margin: '20px 40px 40px 10px'}}>
    <Card title={props.title} bodyStyle={{padding: "0"}} bordered={true} style={{ width: 330 }}>
      <p>{props.content}</p>
      <p>{rating}</p>
      <Rate defaultValue={rating} onChange={handleRating}/>
    </Card>
  </div>
  )
}

export default RateMealCard;
