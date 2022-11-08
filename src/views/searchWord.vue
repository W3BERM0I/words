<template>
  <div class="word">
    <h1>Here is the search word!!!  {{count}}</h1>
    <p>word: {{word}}</p>s
  </div>

  <ul v-for="def in definition">
    <li>{{def}}</li>
  </ul>
  <ul v-for="ex in example">
    <li>{{ex}}</li>
  </ul>
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
      await apiDictionary.get('help').then(res => {
        this.word = res.data[0]["word"]
        res.data[0]["meanings"][0]["definitions"].forEach(el => {
          this.definition.push(el["definition"])
          this.example.push(el["example"])
        });
      })
    }
  }
}
</script>

<style>
  .word {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>