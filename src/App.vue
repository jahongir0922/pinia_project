<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
#app {
  header {
    nav {
      display: flex;
      justify-content: flex-end;
      padding: 20px 50px;
      gap: 20px;
      background-color: #c7d2d2;
      a {
        font-size: 1.5em;
        color: black;
        font-weight: 600;
        padding: 10px;

        &:hover {
          background-color: white;
        }
      }
    }
  }
}
</style>
