import axios from "axios";

const config = {
  headers: {
    "Content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const RegisterComplaint = async (payload) => {
  try {
    const response = await axios.post(
      "/complaints/add-complaint",
      payload,
      config
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const GetAllComplaint = async () => {
  try {
    const response = await axios.get("/complaints/get-all-complaint", config);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    return error.message;
  }
};
