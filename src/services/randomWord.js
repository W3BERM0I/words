import axios from "axios";

const api = axios.create({
  baseURL: "https://random-words-api.vercel.app/word/",
});

export default api;
