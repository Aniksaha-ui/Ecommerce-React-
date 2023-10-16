import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:4000",
});

export default fetcher;
