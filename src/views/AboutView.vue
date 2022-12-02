<script setup>
import { useCounterStore } from "../stores/counter";

const ombor = useCounterStore();
</script>

<template>
  <div id="about">
    <h1>This is an about page</h1>
    <h1 id="sanoq">{{ ombor.sanoq }}</h1>
    <div>
      <button @click="ombor.decrement">-</button>
      <button @click="ombor.increment">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#about {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  #sanoq {
    padding: 50px;
    background-color: #c7d2d2;
  }
  button {
    padding: 15px;
    font-weight: 600;
    font-size: 1.5em;
    background-color: #c7d2d2;
    &:hover {
      background-color: #d8e1e1;
    }
    &:active {
      background-color: #ebf4f4;
    }
  }
}
</style>
