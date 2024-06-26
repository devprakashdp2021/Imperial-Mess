import axios from "axios";

const config = {
  headers: {
    "Content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

//Register a new user
export const RegisterUser = async (payload) => {
  try {
    const response = await axios.post("/users/", payload, config);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//Login a user
export const LoginUser = async (payload) => {
  try {
    const response = await axios.post("/users/login", payload, config);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
//get current user
export const GetCurrentUser = async() => {
    try {
        const response = await axios.get("/users/get-current-user",config);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
export const Getalluser=async(id)=>{
    try{
        const response=await axios.get(`/users/get-all-user/${id}`,config);
        return response.data;
    }catch(error){
        return error.message;
    }
}
export const Blockuser=async(id)=>{
    try{
        const response=await axios.put(`/users/block-user/${id}`,config);
        return response.data;
    }catch(error){
        return error.message;
    }
}