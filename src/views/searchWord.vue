<template>
  <div class="word">
    <p>{{ searchWord }}</p>
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
      if(this.searchWord == '') return

      await apiDictionary.get(this.searchWord).then(res => {
        this.word = res.data[0]["word"]
        res.data[0]["meanings"][0]["definitions"].forEach(el => {
          this.definition.push(el["definition"])
          this.example.push(el["example"])
        });
      })
    
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
  .word {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>