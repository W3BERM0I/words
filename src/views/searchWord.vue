<template>
  <main>
    <div class="notification" v-show="!this.noWord()">
      <h2>Please re-enter a word</h2>
      <p>Now don't have any word to search, please re-enter any in word to search</p>
    </div>

    <div v-show="this.noWord()" class="word">
      <div class="div-title">
        <p class="title">{{ word }} - {{ translate }}</p>
        <audio v-show="false" class="audio" id="audio" :src="this.audio" mozCurrentSampleOffset="true" controls preload>
          <p>Your browser doesn't support HTML5 video. Here is a <a :href="this.audio">link to the video</a> instead.</p>
        </audio>
        <span @click.prevent="playAudio" v-if="this.audio" class="imgSpan"></span>
      </div>
      <div class="content">
          <div>
            <h2>Definition</h2>
            <ul v-for="(def, index) in definition" :key="index" class="lista">
              <li>{{def}}</li>
            </ul>
          </div>
          <div v-show="this.exampleIsNull()">
            <h2>Examples</h2>
            <ul v-for="(ex, index) in example" :key="index" class="lista">
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
  el: '#audio',
  data() {
    return {
      word: '',
      audio: '',
      translate: '',
      definition: [],
      example: []
    }
  },
  async created() {
    await this.geraConteudo()
    this.translateWord()
  },
  methods: {
    async geraConteudo() {
      if(this.searchWord == '') return
      await apiDictionary.get(this.searchWord).then(res => {
        this.word = res.data[0]["word"].toUpperCase()
        this.audio = res.data[0]["phonetics"][0]["audio"]
        res.data[0]["meanings"][0]["definitions"].forEach(el => {
        this.definition.push(el["definition"])
        this.example.push(el["example"])
        });
      })    
    },
    async translateWord() {
       await translateApi.get(`translate?engine=google&text=${this.word}&to=pt`).then(res => {
         this.translate = res.data["data"]["result"].toUpperCase()
       }).catch(err => console.log('pauuuuuuuuuuu'))
    },
    noWord() {
      return !Boolean(this.word.length == 0);
    },
    exampleIsNull() {
      if(this.example[0]) return Boolean(this.example[0].length !== 0)
      return false
    },
    playAudio() {
      console.log("tocar audio chato!!!!")
      var myAudio = document.getElementById("audio")
      myAudio.play()
    }
  },
  computed: {
    searchWord() {
      return this.$store.state.word
    }
   }
}
</script>

<style>

.imgSpan {
  background-image: url("../assets/img/speaker.svg"); 
  width: 4rem;
  height: 4rem;
  background-repeat: no-repeat;
  margin-left: 2rem;
}
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
    gap: 15px;
  }

  .div-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .audio {
    width: 20vw;
  }

  .title {
    font-size: 60px;
    font-weight: 700;
    color: var(--verdeClaro);
  }

  h2 {
    color: var(--cinzaEscuro);
    font-weight: 600;
  }

  li {
    color: var(--cinzaEscuro);
    font-weight: 400;
    margin-bottom: 8px;
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

  @media screen and (max-width: 767px){
    .div-title {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    
    .imgSpan {
      background-image: url("../assets/img/speaker.svg"); 
      width: 3rem;
      height: 3rem;
      margin-right: 60px;
    }

    .title {
      font-size: 25px;
    }

    .audio {
      width: 60vw;
    }
  }

</style>