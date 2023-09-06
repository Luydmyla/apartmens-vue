<template>
  <main class="apartment-page">
    <SectionWithHeaderSpacer>
   <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              :owner="apartment.owner"
              class="apartment-page__owner"
            />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionWithHeaderSpacer>
   
  </main>
</template>

<script>
// import apartments from "../components/apartment/apartments.js";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner.vue";
import reviewsList from "../components/reviews/reviews.json";
import Reviews from "../components/reviews/index.vue";
import Container from "../components/shared/Container.vue";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer.vue";

import { getApartmentById } from "../services/apartments.service.js";

export default {
  name: "ApartmenPage",
  components: { Container, SectionWithHeaderSpacer,  ApartmentsMainInfo, ApartmentsOwner, Reviews },
  data() {
    return {
      apartment: null,
    };
  },

  computed: {
    reviewsList() {
      return reviewsList;
    },
    // apartment() {
    //   return apartments.find(
    //     (apartment) => apartment.id === this.$route.params.id
    //   );
    // },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      console.log(data);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
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
  /* &__owner {
    min-width: 350px;
    margin-left: 30px;
  } */
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
