<template>
  <main class="apartment-page">
    <Container>
      <!-- <h1>Apartment Page</h1> -->
      <ApartmentsMainInfo :apartment="apartment" />
    </Container>
  </main>
</template>

<script>
import apartments from "../components/apartment/apartments.js";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import Container from "../components/shared/Container.vue";
export default {
  name: "ApartmenPage",
  components: { Container, ApartmentsMainInfo },
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
}
</style>
