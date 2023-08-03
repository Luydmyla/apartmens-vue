<script setup>
import { reactive, computed, ref } from "vue";
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";

import apartment from "./components/apartment/apartments.js";
</script>

<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <!-- <h2>{{ text }}</h2> -->
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
