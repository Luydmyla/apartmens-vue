<template>
  <div class="wrapper-input">
   <input :value="modelValue" @input="onInput" class="custom-input" :class="!isValid && 'custom-input--error'"/>
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
.wrapper-input {
  position: relative;
  display: inline-flex;
}
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
  &--error {
    border-color: #b700ff;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: #b700ff;
    line-height: 1.3;
  }
}
</style>
