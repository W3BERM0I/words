<template>
  <main>
    <div class="notification" v-show="!this.noWord()">
      <h2>Please re-enter a word</h2>
      <p>Now don't have any word to search, please re-enter any in word to search</p>
    </div>

    <div v-show="this.noWord()" class="word">
      <p class="title">{{ word.toUpperCase()}} - {{ translate.toUpperCase()}}</p>
      <div class="content">
          <div>
            <h2>Definition</h2>
            <ul v-for="(def, index) in definition" :key="index">
              <li>{{def}}</li>
            </ul>
          </div>
          <div v-show="this.exampleIsNull()">
            <h2>Examples</h2>
            <ul v-for="(ex, index) in example" :key="index">
              <li>{{ex}}</li>
            </ul>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import apiDictionary from '../services/apiDictionary'
import translateApi from '../services/translateApi'


export default {
  data() {
    return {
      word: '',
      translate: 'teste',
      // cancelSource: null,
      definition: [],
      example: []
    }
  },
  created() {
    this.geraConteudo()
    this.translateWord()
  },
  methods: {
    async geraConteudo() {
      if(this.searchWord == '') return

      await apiDictionary.get(this.searchWord).then(res => {
        this.word = res.data[0]["word"]
        res.data[0]["meanings"][0]["definitions"].forEach(el => {
          this.definition.push(el["definition"])
          this.example.push(el["example"])
        });
      })
      console.log(this.example)
    
    },
    async translateWord() {
       await translateApi.post().then(res => {
         // this.translate = res.data
         console.log(res)
       }).catch(err => {
         console.log('pauuuuuuuuuuuuuuuuuuuuuu')
       })

      // this.cancelTranslate();
      // this.cancelSource = axios.CancelToken.source();
      // await translateApi.get(`?engine=google&text=${this.word}&to=pt`, { cancelToken: this.cancelSource.token }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log('pauuuuuuuuuuu')

      // })
    // },
    // cancelTranslate() {
    //   if (this.cancelSource) {
    //       this.cancelSource.cancel();
    //   }
    },
    noWord() {
      return !Boolean(this.word.length == 0);
    },
    exampleIsNull() {
      if(this.example[0]) return Boolean(this.example[0].length !== 0)
      return false
    }
  },
  computed: {
    searchWord() {
      return this.$store.state.word
    }
   }
  // async setup() {
  //      const encodedParams = new URLSearchParams();
  //      encodedParams.append("q", "try");
  //      encodedParams.append("target", "pt");
  //      encodedParams.append("source", "en");
  //      const options = {
  //        method: "POST",
  //        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  //        headers: {
  //          "content-type": "application/x-www-form-urlencoded",
  //          "Accept-Encoding": "application/gzip",
  //          "X-RapidAPI-Key": "aeed8fecbfmsha334cae77f2243ap19ba12jsnb40940ae0ae5",
  //          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  //        },
  //        data: encodedParams,
  //      };
  //      await axios
  //        .request(options)
  //        .then(function (response) {
  //          console.log(response.data);
  //         //  this.translate = response.data
  //        })
  //        .catch(function (error) {
  //          console.error(error);
  //        });
  // }
}
</script>

<style>

  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--brancoEscuro);
  }

  .word {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--brancoClaro);
    min-height: 50vh;
    min-width: 50vw;
    border-radius: 20px;
    margin-top: 40px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    font-size: 25px;
    margin: 0px 40px;
  }

  .title {
    font-size: 60px;
    font-weight: 700;
    justify-items: flex-start;
    color: var(--verdeClaro)
  }

  h2 {
    color: var(--cinzaEscuro);
    font-weight: 600;
  }

  li {
    color: var(--cinzaEscuro);
    font-weight: 400;
  }

  .notification {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  .notification>h2 {
    margin-top: 70px;
    font-weight: 700;
    font-size: 50px;
  }

  .notification>p {
    margin-top: 30px;
    font-weight: 400;
    font-size: 30px;
  }

</style>