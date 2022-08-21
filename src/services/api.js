import axios from "axios";

const api = axios.create({
  baseURL: "https://wetbat--api.herokuapp.com/"
})

export default api;