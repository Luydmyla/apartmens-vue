<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">
      {{ review.content }}
    </p>
  </section>
</template>

<script>
import ReviewsHeading from "./ReviewHeading.vue";
export default {
  name: "ReviewsItem",
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      rquired: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
