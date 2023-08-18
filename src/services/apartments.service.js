import axios from "../utils/axios.js";
//  створимо методи для запитів
export const getApartmentsList = () => {
  return axios.get("/apartments");
};

export const getApartmentById = (id) => {
  return axios.get(`/apartments/${id}`);
};
