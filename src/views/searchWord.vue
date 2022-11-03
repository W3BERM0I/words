<template>
  <h1>Here is the search word!!!  {{count}}</h1>
  <button @click.prevent="increment">{{count}}</button>
</template>

<script setup>
import { mapActions, storeToRefs } from "pinia";
import { ref } from "vue"
import { useCounterStore } from "../stores/counter";

const main = useCounterStore();

const { count } = storeToRefs(main.count);
const {increment} = mapActions(useCounterStore, ['increment']);
</script>

<style>

</style>