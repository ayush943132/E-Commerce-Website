import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/web-40a2e/us-central1/api",
});

export default instance;
