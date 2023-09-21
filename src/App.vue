<script setup>
import { reactive, computed, ref } from "vue";
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/header/index.vue";
// import { mapGetters } from "vuex";
// import Notifications from './components/notifications';



</script>

<template>
  <div id="app">
    <notifications />
    <div class="content">
      <AppHeader />
      
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
  /* padding-top: 120px; */
}
</style>
