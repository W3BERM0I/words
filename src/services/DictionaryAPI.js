import axios from "axios";

const api = axios.create({
  baseURL: "https://random-words-api.vercel.app/word/",
});

export default api;

/**
 * 

    await dictionaryapi.get("spoon").then((res) => {
      this.word = res.data[0]
      let exp = []
      this.word["meanings"][0]["definitions"].forEach(el => {
          if (typeof el.example !== 'undefined') {
            exp.push(el.example)
            console.log(el.example)
          }
        })

    this.example = exp
    }).catch(err => {
      console.log(err)
    })
 */
