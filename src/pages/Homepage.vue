<template>
  <main class="homepage">
    <Container>
      <ApartmentsFilterForm
        @update:modelValue="filter"
        class="apartments-filter"
      />
    </Container>
    <Container>
      <p v-if="!filteredApartments.length">
        По вашому запиту нічого не знайдено
      </p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :descr="apartment.descr"
            :price="apartment.price"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            @click="handleItemClick"
          />
        </template>
      </ApartmentsList>
    </Container>
  </main>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import Container from "../components/shared/Container.vue";
import apartment from "../components/apartment/apartments.js";

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

function logger(value) {
  console.log(value, "---form value");
}

function filter({ city, price }) {
  console.log(filters.value.city, filters.value.price);
  filters.value.city = city;
  filters.value.price = price;
}

function filterByCityName(apartments) {
  console.log(filters.value.city);
  if (!filters.value.city) return apartments;
  return apartments.filter((apartment) => {
    return apartment.location.city === filters.value.city;
  });
}

function filterByPrice(apartments) {
  console.log(filters.value.price);
  if (!filters.value.price) return apartments;
  return apartments.filter((apartment) => {
    return apartment.price >= filters.value.price;
  });
}
</script>

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
.apartments-filter {
  margin-bottom: 40px;
}
</style>
