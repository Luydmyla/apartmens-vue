<template>
  <input :value="modelValue" @input="onInput" />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
