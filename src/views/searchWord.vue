<template>
  <main>
    <div v-show="this.noWord()" class="word">
      <p class="title">{{ word }}</p>
      <div class="content">
          <div>
            <h2>Definition</h2>
            <ul v-for="(def, index) in definition" :key="index">
              <li>{{def}}</li>
            </ul>
          </div>
          <div>
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

export default {
  data() {
    return {
      word: '',
      definition: [],
      example: []
    }
  },
  created() {
    this.geraConteudo()
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
    
  },
    noWord() {
      return !Boolean(this.word.length == 0);
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

</style>