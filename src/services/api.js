import axios from "axios";

const api = axios.create({
  baseURL: "https://meeguapi.herokuapp.com/"
})

export default api;