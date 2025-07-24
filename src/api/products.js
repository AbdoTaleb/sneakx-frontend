import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api'; // Adjust the base URL as needed

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
