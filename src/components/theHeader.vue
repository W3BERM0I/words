<template>
  <header>
    <button class="title" @click.prevent="refresh">Learn English</button>
    <input type="text" class="targetWord" @keydown.enter="word" placeholder="Search a word" v-model="this.searchWord" >
  </header>
</template>

<script>
  export default {
    data() {
      return {
        searchWord: ''
      }
    },
    methods: {
      refresh() {
        this.$route.fullPath == '/' ? location.reload() : this.$router.push({ name: "home" })
      },
      word() {
        this.$store.dispatch('defineSearchWord', this.searchWord).then(() => {
          console.log("search word successfully updated")
        }).catch(() => {
          console.log("search word has not been updated")
        })
        this.$route.fullPath == '/word' ? location.reload() : this.$router.push({ name: "searchWord" })
        this.searchWord = ''
      }
    }
  }
</script>

<style scoped>

  header {
    background: var(--preto);
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
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
    white-space: nowrap;
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
      max-width: 30%;
      font-size: 20px;
      margin-left: 20px;
      padding: 4px 30px;
    }

    header {
      min-height: 70px;
    }

    .title {
      color: var(--brancoClaro);
      font-weight: 700;
      font-size: 20px;
      margin: 0px;
      margin-right: 0px;
      margin-left: 5px;
      padding: 2px 0px 2px 0px;
    }
    .title:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .targetWord {
      max-width: 40%;
      font-size: 30px;
      margin-left: 20px;
      padding: 4px 0px;
    }

    header {
      min-height: 80px;
    }

    .title {
      color: var(--brancoClaro);
      font-weight: 700;
      font-size: 40px;
      margin: 0px;
      margin-right: 0px;
      margin-left: 5px;
      padding: 2px 0px 2px 0px;
    }
  }



</style>