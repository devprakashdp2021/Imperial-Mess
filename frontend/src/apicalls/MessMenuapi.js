import axios from "axios";

const config = {
    headers:{
        'Content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
  };
  
//Get a Mess Menu
export const FetchMenu = async (id) => {
    try {
        console.log(id)
        const response = await axios.get(`/mess/get-hostel-mess/${id}`,config);
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        return error.message;
    }
}
export const UpdateMenu = async (payload) => {
    try {
        console.log(payload)
        const response = await axios.put("/mess/update-mess", payload,config);
        return response.data;
    } catch (error) {
        return error.message;
    }
}