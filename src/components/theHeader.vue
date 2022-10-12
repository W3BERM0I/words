<template>
  <header>
    <h1>Learn English</h1>
    <input type="text" class="targetWord" v-model="this.targetWord" >
  </header>
</template>

<script>
  export default {
    data() {
      return {
        targetWord: ''
      }
    }
  }
</script>

<style scoped>
  header {
    background: var(--azulClaro);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: var(--brancoClaro);
    font-weight: 700;
    font-size: 45px;
    margin: 20px;
    margin-right: 250px;
  }

  .targetWord {
    background-image: url('../assets/img/search.svg');
    background-repeat: no-repeat;
    background-position-x: 92%;
    background-position-y: 50%;
    border: 1px solid var(--cinzaEscuro);
    border-radius: 20px;
    padding: 1px 80px;
    text-align: center;
    font-size: 40px;
  }
</style>