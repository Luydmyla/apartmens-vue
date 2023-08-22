<template>
  <form @submit.prevent="handleSubmit" class="form">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput 
    v-model="price" 
    placeholder="ціна, від" 
    error-message="Поле не повинно бути порожнім"
    :rules="rules"
    />
    <SubmitButton type="submit" class="form__submit">Підбір житла</SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/Button.vue";
import { isRequired, charLimit } from '../../utils/validationsRules.js'

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "Місто", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("update:submit", { city: this.city, price: this.price });
      // console.log("Item click");
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
