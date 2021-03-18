import axios from "axios";


// CREATE A NEW SERVICE
export const createService = async (token, data) =>
  await axios.post(
    `${process.env.REACT_APP_API}/create-service`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );