import axios from "axios";
import { useLoading } from "vue-loading-overlay";

const api = axios.create({
  baseURL: "https://random-words-api.vercel.app/word/",
});

export default api;
