<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Сумарний рейтинг</h2>
      <div class="reviews__rating">
        <span>98 відгуків</span>
        <Rating :rating="0" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in reviews"
      :key="review.author"
      :review="review"
    />
    <button class="reviews__show-more">Читати ще...</button>
  </section>
</template>

<script>
import ReviewsItem from "./reviews-item/index.vue";
import Rating from "../StarRating.vue";

export default {
  name: "Reviews",
  components: {
    ReviewsItem,
    Rating,
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
  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
    color: white;
  }
}
</style>
