<template>
  <main>
    <section class="principal">
      <div class="expresions">
        <h1 class="title">Expressions</h1>
        <div v-for="(word, index) in this.words" :key="index">
          <p class="word">{{word['word'] }}</p>
          <p>{{word['definition']}}</p>
        </div>
      </div>
      <div class="sentences">
        <h1 class="title">Sentences</h1>
        <p v-for="(sentence, index) in this.sentences" :key="index">{{sentence}}</p>
      </div>
    </section> 
    <section class="principal">
      <div class="questions">
        <h1 class="title">Questions</h1>
        <p v-for="(question, index) in this.questions" :key="index">{{question}}
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import randomWord from '../services/randomWord'

export default {
  data() {
    return {
      words: [],
      questions: [],
      sentences: [],
      vocabulary: []
    }
  },
   async created() {
    for (var i = 0; i < 3; i++) {
      await randomWord.get('/question').then(res => {
        this.questions.push(res.data[0]['word'])
      })
      await randomWord.get('/sentence').then(res => {
        this.sentences.push(res.data[0]['word'])
      })
      await randomWord.get('/idiom').then(res => {
        this.words.push(res.data[0])
      })
      await randomWord.get('/vocabulary').then(res => {
        this.vocabulary.push(res.data[0])
      })
    }
  }
}
</script>

<style scoped>
main {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  background-color: var(--brancoClaro);
}

.principal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}
.title {
  color: var(--verdeClaro);
  font-weight: 700;
  font-size: 50px;
}

.word {
  color: var(--cinzaEscuro);
  font-weight: 600;
  font-size: 30px; 
}
</style>