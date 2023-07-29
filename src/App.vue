<script setup>
import { reactive, computed, ref } from "vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import Container from "./components/shared/Container.vue";
import ApartmentsFilterForm from "./components/apartment/ApartmentsFilterForm.vue";
import apartment from "./components/apartment/apartments.js";

const apartments = ref(apartment);
const text = ref("");
const selected = ref("name");

function handleItemClick() {
  console.log("Item click");
}
function logger(value) {
  console.log(value, "---form value");
}
</script>

<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentsFilterForm @submit="logger" class="apartments-filter" />
    </Container>

    <ApartmentsList :items="apartment">
      <!-- <template v-slot:title>New title</template> -->

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

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-align: center;
  color: blue;
  margin-top: 60px;
}
.apartments-filter {
  margin-bottom: 40px;
}
</style>
