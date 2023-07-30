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
const filters = ref({ city: "", price: 0 });

const filteredApartments = computed(() => {
  return filterByCityName(filterByPrice(apartments.value));
});

function handleItemClick() {
  console.log("Item click");
}

function filter({ city, price }) {
  // console.log(filters.value.city, filters.value.price);
  filters.value.city = city;
  filters.value.price = price;
}
function filterByCityName(apartments) {
  if (!filters.value.city) return apartments;
  return apartments.filter((apartment) => {
    return apartment.location.city === filters.value.city;
  });
}
function filterByPrice(apartments) {
  if (!filters.value.price) return apartments;
  return apartments.filter((apartment) => {
    return apartment.price >= filters.value.price;
  });
}
</script>

<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentsFilterForm @update:submit="filter" class="apartments-filter" />
    </Container>
    <p v-if="!filteredApartments.length">По вашому запиту нічого не знайдено</p>
    <ApartmentsList v-else :items="filteredApartments">
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
