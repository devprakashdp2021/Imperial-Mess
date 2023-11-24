import axios from "axios";
const config = {
    headers:{
        'Content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
  };

  export const AddRating = async (payload) => {
    try {
        console.log(payload);
        const response = await axios.post("/rating/addfoodrating", payload,config);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
export const FetchRating=async(foodName,user)=>{
    try {
        const response = await axios.get(`/rating/get-food-rating?foodName=${foodName}&user=${user}`,config);
        return response.data;
    }catch(error){
        return error.message;
    }
}