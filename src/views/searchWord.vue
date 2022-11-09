<template>
  <div v-show="this.noWord()" class="word">
    <p>{{ word }}</p>
    <div>
      <ul v-for="(def, index) in definition" :key="index">
        <li>{{def}}</li>
      </ul>
      <ul v-for="(ex, index) in example" :key="index">
        <li>{{ex}}</li>
      </ul>
    </div>
  </div>
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
  .word {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    color: black;
  }
</style>