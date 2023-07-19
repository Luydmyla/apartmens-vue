<!-- v-for="apartment in items" -->
<!-- :key="apartment.id" -->
<!-- :descr="apartment.descr" -->
<!-- :price="apartment.price" -->
<!-- :rating="apartment.rating" -->
<!-- :imgSrc="apartment.imgUrl" -->
<!-- можна деструктуризувати з апартмента всі ключі -->

<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, price, rating, imgUrl } in items"
        :key="id"
        :descr="descr"
        :price="price"
        :rating="rating"
        :imgSrc="imgUrl"
        class="apartments-list__item"
      />
    </div>
  </Container>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem.vue";
import Container from "../shared/Container.vue";
export default {
  name: "ApartmentsList",
  components: { ApartmentsItem, Container },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
