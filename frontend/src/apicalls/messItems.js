import axios from "axios";
const config = {
  headers: {
    "Content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const AddMessItem = async (payload) => {
  try {
    const response = await axios.post(
      "/messItem/add-messItem",
      payload,
      config
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const GetMessItem = async (item) => {
    try {
        const response = await axios.get(`/messItem/get-messItem?itemName=${item}`,config);
        console.log(response.data)
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const RemoveMessItem = async (payload) => {
  try {
    const response = await axios.delete(
      "/messItem/remove-messItem",
      payload,
      config
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
