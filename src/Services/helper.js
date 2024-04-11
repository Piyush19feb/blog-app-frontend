import axios from "axios";

export const BASE_URL = "http://localhost:9090";

// setting defaults config while creating instance
export const myAxios = axios.create({
  baseURL: BASE_URL,
});
