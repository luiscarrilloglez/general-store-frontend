import axios from "axios";

const SERVER_URL = `${process.env.REACT_APP_API_URL}product/`;

export const getProducts = async (queryParams) => {
  try {
    const response = await axios.get(SERVER_URL, { params: queryParams });
    if (response.status === 200) return response.data;
    else return [];
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(SERVER_URL + id);
    if (response.status === 200) return response.data;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const saveProduct = async (product) => {
  try {
    const response = await axios.post(SERVER_URL, product);
    if (response.status === 201) return response.data;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(SERVER_URL + id, product);
    if (response.status === 200) return response.data;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(SERVER_URL + id);
    return response.status === 204;
  } catch (error) {
    console.log(error);
  }
};
