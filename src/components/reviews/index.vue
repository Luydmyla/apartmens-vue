<template>
  <section class="reviews">
    <ReviewsItem
      v-for="review in reviews"
      :key="review.author"
      :review="review"
    />
  </section>
</template>

<script>
import ReviewsItem from "./reviews-item/index.vue";
export default {
  name: "Reviews",
  components: {
    ReviewsItem,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  margin-top: 20px;
  /* background: $card-bg; */
  background: blue;
  padding: 0 2px;
}
</style>
