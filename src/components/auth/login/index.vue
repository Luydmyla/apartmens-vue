<template>
     <AuthContainer class="login">
            <MainTitle class="login__title"> Логін </MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
        <CustomInput 
        v-model="formData.email" 
        name="email"   
        placeholder="email" 
         autocomplete="email"
        class="login__input" 
        :rules="emailRules" 
        />
        <CustomInput 
        v-model="formData.password" 
        name="password" 
        type="password" 
        autocomplete="current-password"
        placeholder="password" 
        class="login__input" 
        :rules="passwordRules"
        />
    <Button type="submit" :loading="loading" class="login__btn">Вхід</Button>
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
// import { loginUser } from '../../../services/auth.service'
import { mapActions } from 'vuex'

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
             loading: false,
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
            return [this.rules.isRequired]
        }
    },
    methods: {
         ...mapActions('auth', ['login']),
     async  handleSubmit() {
          const { form } = this.$refs;
            const isFormValid = form.validate();
            if (isFormValid) {
                try {
                      this.loading = true
                    // const { data } = await loginUser(this.formData)
                    // // console.log(data)
                    //  const { user, token } = data;
                    // this.$store.commit('setUserData', user)
                    // this.$store.commit('setToken', token)
                    //  await this.$store.dispatch('login', this.formData)
                        await this.login(this.formData)
                    
                    // console.log(this.$store.state)
                    this.$router.push({name: 'homepage'})
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
        }
    }
}
</script>

<style lang="scss">
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
