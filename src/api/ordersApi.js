import axios from "axios";

const SERVER_URL = `${process.env.REACT_APP_API_URL}order/`;

export const saveOrder = async (product) => {
  try {
    const response = await axios.post(SERVER_URL, product);
    if (response.status === 201) return response.data;
    else return false;
  } catch (error) {
    console.log(error);
  }
};
