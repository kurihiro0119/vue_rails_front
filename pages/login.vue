<template>
  <user-form-card>
      <template
        v-slot:user-form-card-content
      >
      <v-form
        ref="form"
        v-model="isValid"
        
      >
        <user-form-email 
           :email.sync="params.user.email"
        />
        <user-form-password
           :password.sync="params.user.password"
         />
         <v-card-action>
           <nuxt-link
            to="#"
            class="body-2 text-decoration-none"
           >
            パスワードを忘れた?
           </nuxt-link>
         </v-card-action>
         <v-card-text
          class="px-0"
         >
        <v-btn
          type="submit"
          :disabled="!isValid || loading"
          :loading="loading"
          block
          class="white--text"
          color="appblue"
        >
        ログインする
        </v-btn>
         </v-card-text>
      </v-form>
      </template>
  </user-form-card>
</template>

<script>
import UserFormCard from "../components/User/UserFormCard.vue"
import UserFormEmail from '../components/User/UserFormEmail.vue'
import UserFormName from '../components/User/UserFormName.vue'
import UserFormPassword from '../components/User/UserFormPassword.vue'


export default{
  components: { UserFormName, UserFormEmail, UserFormPassword },
  layout: 'before-login',
  data({$store}){
    return {
      isValid: false,
      loading: false,
      params: {user: {email: '', password: ''}},
      redirectPath: $store.state.loggedIn.homePath,
    }
  },
  methods: {
    login(){
      this.loading = true
      this.$router.push(this.redirectPath)
    }
  },
}
</script>