import axios from "axios";
import { useLoading } from "vue-loading-overlay";

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export default api;
