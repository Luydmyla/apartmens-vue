<template>
  <!-- <button v-bind:type="type" :class="['btn', 'btn--outlined']"> -->
  <!-- <button v-bind:type="type" :class="{ btn: true, 'btn--outlined': true }"> -->
  <button v-bind:type="type"
  :disabled="loading"
  :class="{ btn: true, 'btn--outlined': outlined }">
   <CircleLoader v-if="loading" width="38" height="38" class="btn__loader"/>
      <span class="btn__content" :class="contentStyles">
  <slot></slot>
  </span>
  </button>
</template>

<script>
import CircleLoader from "../loaders/Circle.vue"

export default {

  name: "Button",
  components: {
    CircleLoader,
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
     loading: {
      type: Boolean,
      // default: false
      default: true
    }
  },
  computed: {
    contentStyles() {
      return {
        'btn__content--hidden': this.loading
      }
    }
  }
};
</script>

<!-- <style scoped > -->
<style lang="scss" scoped>
.btn {
   position: relative;
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: none;
    border: 1px solid blue;
    color: blue;
  }
  &__content{
    &--hidden{
      opacity: 0;
    }
  }
   &__loader{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
