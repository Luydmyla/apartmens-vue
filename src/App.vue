<script setup>
import { reactive, computed, ref } from "vue";
// import Button from "./components/Button.vue";
// import DirectiveTest from "./components/DirectivesTest.vue";
// import StarRating from "./components/StarRating.vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
const apartment = ref({
  id: "5f05c9dad2c9bc0f773444bc",
  title:
    "Aut qui adipisci distinctio maiores molestiae sit est inventore vero.",
  descr:
    "Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.",
  price: 2032,
  rating: 4,
  location: {
    city: "Kherson",
  },
  owner: {
    name: "Ellen",
    phone: "115-355-5652",
    email: "Tracey.Morar86@hotmail.com",
  },
});
</script>

<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg"
    />
  </div>

  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-align: center;
  color: blue;
  margin-top: 60px;
}

/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
