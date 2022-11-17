import axios from "axios";

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "pt");
// encodedParams.append("source", "en");
// const options = {
//   method: "POST",
//   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "Accept-Encoding": "application/gzip",
//     "X-RapidAPI-Key": "aeed8fecbfmsha334cae77f2243ap19ba12jsnb40940ae0ae5",
//     "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
//   },
//   data: encodedParams,
// };
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
const api = axios.create({
  baseurl: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "aeed8fecbfmsha334cae77f2243ap19ba12jsnb40940ae0ae5",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
  data: {
    target: "pt",
    source: "en",
    q: "try",
  },
});

// const api = axios.create({
//   baseURL: "https://api-translate.azharimm.site/translate",
// });

export default api;
