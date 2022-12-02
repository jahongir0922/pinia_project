<script setup>
import { useCounterStore } from "../stores/counter";
const ombor = useCounterStore();
</script>

<template>
  <div id="home">
    <h1>This is a home page</h1>
    <h1 id="sanoq">{{ ombor.sanoq }}</h1>
    <h1>{{ ombor.juftToq }}</h1>
  </div>
</template>

<style scoped lang="scss">
#home {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  #sanoq {
    padding: 50px;
    background-color: #c7d2d2;
  }
}
</style>
