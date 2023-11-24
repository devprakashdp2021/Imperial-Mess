import React,{useEffect,useState} from 'react'
import { GetCurrentUser } from '../apicalls/users'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/usersSlice';
import { HideLoading,ShowLoading} from '../redux/loadersSlice';
import Student from '../pages/Student';
import ChiefWarden from "../pages/ChiefWarden";
import Accountant from '../pages/Accountant';
function ProtectedRoute({children}){
    
    const navigate=useNavigate();
    const {user}=useSelector((state)=>state.users);
    const dispatch =useDispatch();
    const [isLoading,setLoading]=useState(true);
    const getCurrentUser=async()=>{
    try{
        console.log('reached protected route');
        dispatch(ShowLoading());
        setLoading(true);
        const response=await GetCurrentUser();
        console.log(response);
        dispatch(HideLoading());
        if(response.success){
            dispatch(SetUser(response.data));
            setLoading(false);
        }else{
            console.log(response.message);
            dispatch(SetUser(null));
            message.error(response.message);
            localStorage.removeItem("token");
            navigate('/login');
        }
    }catch(error){
        dispatch(HideLoading());
        dispatch(SetUser(null));
        console.log(error.message);
        message.error(error.message);
    }
}
useEffect(()=>{
    if(localStorage.getItem('token')){
        getCurrentUser();
    }else{
        navigate('/login');
    }
},[])
if(isLoading){
    return <div> Loading....</div>;
  }
  return (
    <>
    {console.log(user)}
       <div>
         {user.role==="Student"?<Student/>:user.role==="Accountant"?<Accountant/>:<ChiefWarden/>}
       </div>
    </> 
  );
}

export default ProtectedRoute