<template>
    <AuthContainer class="registration">
        <MainTitle class="registration__title"> Реєстрація </MainTitle>
        <!-- <h1> Логін </h1> -->
        <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.name" placeholder="Name" autocomplete="name" name="name" :rules="nameRules"
                class="registration__input" />
            <CustomInput v-model="formData.email" placeholder="Email" autocomplete="email" name="email" :rules="emailRules"
                class="registration__input" />
            <CustomInput v-model="formData.password" placeholder="Password" autocomplete="current-password" name="password"
                type="password" :rules="passwordRules" class="registration__input" />
            <CustomInput v-model="formData.confirmPassword" placeholder="Confirm password" autocomplete="current-password"
                name="password" type="password" :rules="confirmPassword" class="registration__input" />

            <Button type="submit" :loading="loading" class="registration__btn">Вхід</Button>
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
import { registerUser } from '../../../services/auth.service'



export default {
    name: "Registration",
    components: {
        Form,
        MainTitle,
        CustomInput,
        AuthContainer,
        Button,
    },
    data() {
        return {
              loading: false,
            formData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
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
        nameRules() {
            return [this.rules.isRequired]
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            // return [this.rules.isRequired, this.rules.passwordValidation]
            // вілідація пароля не потрібна, тому що людина сама вводить пароль

            return [this.rules.isRequired]
        },
        confirmPassword() {
            return [
                (val) => ({
                    hasPassed: val === this.formData.password,
                    message: 'Паролі не співпадають'
                })
            ];
        }
    },
    methods: {
        async handleSubmit() {
            // console.log(this.$refs.form)
               const { form } = this.$refs;
            const isFormValid = form.validate();
            const { name, password, email } = this.formData;
            // console.log(isFormValid)
            if (isFormValid) {
                try {
                      this.loading = true
                    const { data } = await registerUser({ name, password, email })
                    console.log(data)
                     form.reset()
                } catch (error) {
                    console.log(error)
                     this.$notify({
                        type: 'error',
                        title: 'Произошла ошибка',
                        text: error.message,
                    });
                }
                finally {
                    this.loading = false
                }
            }
        },
    },
    // mounted(){
    //     console.log(this.$refs.form) 
    // },
}
</script>

<style lang="scss">
.registration {
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

/* .login-input{
     margin-bottom: 20px;
    width: 100%;
} */
</style>