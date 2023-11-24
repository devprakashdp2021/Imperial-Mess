import axios from "axios";
const config = {
    headers:{
        'Content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
  };

export const RegisterComplaint = async (payload) => {
    try {
        const response = await axios.post("/complaints/add-complaint", payload,config);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
export const GetAllComplaint = async (id) => {
    try {
        const response = await axios.get(`/complaints/get-all-complaint/${id}`,config);
        // console.log(response.data)
        return response.data;
    } catch (error) {
        return error.message;
    }
}
export const handleupVote =async(payload) =>{
    try{
        console.log(payload.complaint);
        console.log((payload.complaint)._id);
        const response=await axios.put(`/complaints/vote/${(payload.complaint)._id}`,{id:payload.user._id},config);
        console.log(response.data)
        return response.data;
    }catch(error){
        
        return error.message;
    }
}
export const handledownVote=async(payload)=>{
    try{
        const response=await axios.put(`/complaints/unvote/${(payload.complaint)._id}`,{id:payload.user._id},config);
        return response.data;
    }catch(error){
        return error.message;
    }
}
export const handleDelete=async(payload)=>{
    try{
        const response=await axios.delete(`/complaints/delete-complaint/${(payload.complaint)._id}`,config);
        return response.data;
    }catch(error){
        return error.message;
    }
}