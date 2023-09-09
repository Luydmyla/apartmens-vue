<template>
  <div class="wrapper-input">
   <input :value="modelValue"
   v-bind="$attrs" 
   @input="onInput" 
   class="custom-input" 
   :class="!isValid && 'custom-input--error'"/>
   <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
      error: "",
    };
  },
  inject: ['form'],
     inheritAttrs: false,
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
  modelValue(){
    this.validate()
    // console.log(value)
  }
  },
  mounted() {
    // перевіряємо чи є форма, якщо ні просто повертаємось, якщо так - реєструємо саме цю форму, що є
    if (!this.form) return
    this.form.registerInput(this)
  },
  // памятаємо про утєчку памяті, тому перед анмаунтінгом прибираємо інпут із загального масива нашої форми
  beforeUnmount() {
    if (!this.form) return
    this.form.unRegisterInput(this)
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
     validate() {
       this.isValid = this.rules.every((rule) => {
         const { hasPassed, message } = rule(this.modelValue)
         if (!hasPassed) {
           this.error = message || this.errorMessage;
         }
         return hasPassed;
       });
       return this.isValid;
    },
    reset() {
      this.$emit('input', '')
    }
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.wrapper-input {
  position: relative;
  display: inline-flex;
  width: 100%;
   /* margin-bottom: 20px; */
}
.custom-input {
  height: 40px;
  /* max-width: 220px; */
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  &:hover {
    border: 2px solid grey;
  }

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
