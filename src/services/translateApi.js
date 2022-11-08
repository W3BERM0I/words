import axios from "axios";

const api = axios.create({
  baseURL: "https://libretranslate.com/translate",
});

export default api;

// const res = await fetch("https://libretranslate.com/translate", {
//   method: "POST",
//   body: JSON.stringify({
//     q: "",
//     source: "en",
//     target: "pt",
//     format: "text",
//     api_key: "",
//   }),
//   headers: { "Content-Type": "application/json" },
// });

// console.log(await res.json());
