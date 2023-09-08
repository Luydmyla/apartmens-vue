import axios from "axios";

export const loginUser = (payload) => {
  return axios.post("/users/login", payload);
};
