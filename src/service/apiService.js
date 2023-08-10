import axios from "axios";

const httpService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "X-app-name-header": "retroMart",
  },
});


export  default httpService;