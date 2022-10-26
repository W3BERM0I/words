<template>
  <header>
    <button class="title" @click.prevent="refresh">Learn English</button>
    <input type="text" class="targetWord" v-model="this.targetWord" >
  </header>
</template>

<script>
  export default {
    data() {
      return {
        targetWord: ''
      }
    },
    methods: {
      refresh() {
        location.reload()
      }
    }
  }
</script>

<style scoped>

  h1 {
    display: none;
  }

  header {
    background: var(--preto);
    display: flex;
    align-items: center;
    justify-content: center;
  }  
  .title {
    color: var(--brancoClaro);
    background-color: var(--preto);
    font-weight: 700;
    font-size: 45px;
    margin: 20px;
    margin-right: 250px;
    text-align: center;
    border: none;
  }

  .title:hover {
    transform: scale(1.2);
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

  @media screen and (max-width: 768px) {
    .targetWord {
      display: none;
    }

    header {
        min-height: 80px;
    }

    .title {
      color: var(--brancoClaro);
      font-weight: 700;
      font-size: 45px;
      margin: 0px;
      margin-right: 0px;
      padding: 2px 0px 2px 0px;
    }
  }
</style>