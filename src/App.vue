<script setup>
import { reactive, computed, ref } from "vue";
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";
import { mapGetters } from "vuex";
// import  Notifications  from "./components/notifications/index";
// import apartment from "./components/apartment/apartments.js";
// console.log(this.$store.getters['auth/isLoggedIn'])
// const isLoggedInBoo = computed(() => {
//   return mapGetters('auth', ['isLoggedIn'])
// });

// console.log(isLoggedInBoo)

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
