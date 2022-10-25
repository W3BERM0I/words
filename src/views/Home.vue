<template>
  <main> 
    <section>
      <div class="expresions">
        <h1 class="title">Expressions</h1>
        <div v-for="(word, index) in this.words" :key="index">
          <p class="content">{{word['word'] }}</p>
          <p class="info1">{{word['definition']}}</p>
        </div>
      </div>
      <div class="questions">
        <h1 class="title">Questions</h1>
        <p class="content" v-for="(question, index) in this.questions" :key="index">  {{question}}
        </p>
      </div>
      <div>
        <h1 class="title">Sentences</h1>
        <p class="content" v-for="(sentence, index) in this.sentences" :key="index">{{sentence}}</p>
      </div>
    </section>
    <section>
      <div>
        <h1 class="title">Words</h1>
        <div  v-for="(sentence, index) in this.vocabulary" :key="index">
          <p class="content1">{{sentence.word}}</p>
          <p class="info">{{sentence.definition}}</p>
        </div>
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
    }

    for (var j = 0; i < 19; i++) {
      await randomWord.get('/vocabulary').then(res => {
        this.vocabulary.push(res.data[0])
      })
    }
  }
}
</script>

<style scoped>
main {
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  background-color: var(--brancoEscuro);
}

section {
  align-items: flex-start;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 10px;
  padding: 20px;
  min-width: 25vw;
}
.title {
  color: var(--verdeClaro);
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  color: var(--cinzaEscuro);
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  text-overflow: clip; 
  margin-bottom: 5px;
}

.content1 {
  color: var(--cinzaEscuro);
  font-weight: 600;
  font-size: 25px;
  text-overflow: clip; 
}

.info {
  color: var(--cinzaEscuro);
  font-size: 23px;
}

.info1 {
  color: var(--cinzaEscuro);
  font-size: 23px;
  text-align: center;
}
</style>