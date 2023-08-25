<template>
    <Form @submit.prevent="handleSubmit">
        <CustomInput v-model="formData.email" name="email" />
        <CustomInput v-model="formData.password" name="password" />
    <Button type="submit">Click me</Button>
    </Form>
</template>

<script>
import Form from '../shared/form/index.vue'
import CustomInput from '../shared/CustomInput.vue';
import Button from '../shared/Button.vue'

export default {
    name: "Login",
    components: {
        Form,
        CustomInput,
         Button,
    },
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.formData)
        }
    }
}
</script>

<style lang="scss" scoped></style>