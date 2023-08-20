<template>
  <div class="wrapper-input">
   <input :value="modelValue" @input="onInput" class="custom-input" />
   <span v-if="!isValid" class="custom-input__error">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true
    }
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },

    errorMessage: {
      type: String,
      default: ""
    },
    rules: {
      type: Array,
      // якщо ми вказуємо дефолтне значення ссилочного типу, то робимо це через функцію
      default: () => []
    }
  },
watch: {
  modelValue(value){
    this.validate(value)
    console.log(value)
  }
},
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    validate(value) {
      this.isValid = this.rules.every((rule) => rule(value))
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.custom-input {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }
}
</style>
