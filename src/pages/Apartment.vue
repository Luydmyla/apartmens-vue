<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <!-- <h1>Apartment Page</h1> -->
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentsOwner
          :owner="apartment.owner"
          class="apartment-page__owner"
        />
      </div>
    </Container>
  </main>
</template>

<script>
import apartments from "../components/apartment/apartments.js";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner.vue";

import Container from "../components/shared/Container.vue";
export default {
  name: "ApartmenPage",
  components: { Container, ApartmentsMainInfo, ApartmentsOwner },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },

  mounted() {
    // console.log(this.$route);
    // console.log(this.$route.params.id);
    // console.log(this.$route.query.name);
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
