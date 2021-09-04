<template>
  <div>
    <h4 class='mv3'>{{login ? 'Login' : 'Sign Up'}}</h4>
    <div class='flex flex-column'>
      <input
          v-model="username"
          type="text"
          placeholder="Your name">
      <input
          v-model="password"
          type="password"
          placeholder="Password">
    </div>
    <div class='flex mt3'>
      <button
          type="button"
          class='pointer mr2 button'
          @click="confirm()">
        {{login ? 'login' : 'create account'}}
      </button>
<!--      <button-->
<!--          type="button"-->
<!--          class='pointer button'-->
<!--          @click="login = !login">-->
<!--        {{login ? 'need to create an account?' : 'already have an account?'}}-->
<!--      </button>-->
    </div>
  </div>
</template>

<script>
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'
import {LOGIN} from "../constants/graphql";
export default {
  name: 'Login',
  data () {
    return {
      login: true,
      username: 'superadmin',
      password: 'Admin123',
      name: ''
    }
  },
  beforeCreate() {
  },
  methods: {
    confirm  () {
      const { name, username, password } = this.$data
      if (this.login) {
        this.$apollo.mutate({
          mutation: LOGIN,
          variables: {
            username,
            password
          }
        }).then((result) => {
          const id = result.data.login.user.id
          const token = result.data.login.token
          this.saveUserData(id, token)
          this.$router.push({path: '/'})
        }).catch((error) => {
          alert(error);
          console.log(error)
        })
      }
    },
    saveUserData (id, token) {
      localStorage.setItem(GC_USER_ID, id)
      localStorage.setItem(GC_AUTH_TOKEN, token)
      this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
      this.$store.commit('login')
      // alert(this.$store.getters.isLogin)
    }
  }
}
</script>