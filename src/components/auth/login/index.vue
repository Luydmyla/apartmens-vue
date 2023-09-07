<template>
     <AuthContainer class="login">
            <MainTitle class="login__title"> Логін </MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
        <CustomInput v-model="formData.email" name="email"   placeholder="email" class="login__input" :rules="emailRules" />
        <CustomInput v-model="formData.password" name="password"  placeholder="password" class="login__input" :rules="passwordRules"/>
    <Button type="submit" class="login__btn">Вхід</Button>
    </Form>
      </AuthContainer> 
</template>

<script>
import Form from '../../shared/form/index.vue'
import CustomInput from '../../shared/CustomInput.vue';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../../shared/MainTitle.vue';
import Button from '../../shared/Button.vue'
import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationsRules.js'
export default {
    name: "Login",
    components: {
        Form,
        MainTitle,
        CustomInput,
         AuthContainer,
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
    computed: {
        rules() {
            return {
                emailValidation,
                passwordValidation,
                isRequired
            }
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation]
        }
    },
    methods: {
        handleSubmit() {
            const isFormValid=this.$refs.form.validate()
            if (isFormValid) {
                console.log(this.formData)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}

</style>
