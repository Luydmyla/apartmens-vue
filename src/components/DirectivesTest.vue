<template>
  <!--v-if повністюприбирає наш елементь з дом дерева  -->
  <div v-if="isVisible">
    <!-- <div v-show="isVisible"> -->
    <!-- <h1>Title Directives</h1> -->

    <!-- v-show добавляє або прибирає стиль дісплей нон -->
    <h1 v-show="true">Title Directives</h1>
    <ul>
      <!-- директива прохода по колекції,  -->
      <!-- один із способів вішаємо на дів директиву в-іф  -->
      <!-- <div v-for="fruit in fruits" :key="fruit"> -->
      <!-- і ставимо умову, по якій будуть відображатися елементи  -->
      <!-- <li v-if="fruit === 'banana'">{{ fruit }}</li> -->
      <!-- </div> -->
      <!-- щоб не страдала семантіка, тобто  щоб у списка не було лишнього діва -->
      <!-- заміняємо дів на темплейт, але ключ потрібно вішати на дитину, тобто на лішку -->

      <template v-for="fruit in fruits">
        <!-- і ставимо умову, по якій будуть відображатися елементи -->
        <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
      </template>

      <!-- обовязково добавляти ключ -унікальний айдішнік для кожного елементва, який ми відмальовуємо проходчячи по колекції  -->
      <!-- <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li> -->
    </ul>
    <!-- ми також можемо проходитися в-фором по обєктах -->
    <ul>
      <li v-for="car in cars" :key="car.color">{{ car.color }}</li>
      <!-- щоб вивести самі ключі, добавимо у форі що ми перебираємо ключі і виведемо також самі ключі-->
      <li v-for="(car, key) in cars" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectiveTest",
  data() {
    return {
      isVisible: true,
      fruits: ["kiwi", "banana", "apple"],
      cars: {
        audi: {
          color: "red",
        },
        bmw: {
          color: "black",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
