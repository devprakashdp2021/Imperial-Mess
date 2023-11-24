import axios from "axios";
const config = {
  headers: {
    "Content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const AddMessDailyExpense = async (payload) => {
  try {
    const response = await axios.post(
      "/messDailyExpense/add-messDailyExpense",
      payload,
      config
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const GetMessDailyExpense = async () => {
    try {
        const response = await axios.get("/messDailyExpense/get-messDailyExpense",config);
        // console.log(response.data)
        return response.data;
    } catch (error) {
        return error.message;
    }
}
