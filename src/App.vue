<script setup>
import { reactive, computed, ref } from "vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartment from "./components/apartment/apartments.js";
const apartments = ref(apartment);
function handleItemClick() {
  console.log("Item click");
}
</script>

<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartment">
      <template v-slot:title>New title</template>

      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          @click.native="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-align: center;
  color: blue;
  margin-top: 60px;
}
</style>
