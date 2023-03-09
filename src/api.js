import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchAllCharacter = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    return response.data;
  } catch {
    Promise.reject(new Error("Not Found"));
  }
};

export const fetchByName = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?name=${query}`);
    return response.data;
  } catch {
    Promise.reject(new Error("Not Found"));
  }
};

export const fetchById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch {
    Promise.reject(new Error("Not Found"));
  }
};
