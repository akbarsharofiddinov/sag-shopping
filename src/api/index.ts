import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://sag-admin.webclub.uz/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default myAxios;
