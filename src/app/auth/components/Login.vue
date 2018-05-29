<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.username.focus()
    })
  },
  methods: {
    doLogin () {
      console.log('teste')
      this.$store.dispatch('attemptLogin', {...this.user})
        .then(() => {
          if (this.$route.query.redirect) {
            this.$router.push({path: this.$route.query.redirect})
          } else {
            this.$router.push({ name: 'index' })
          }
        })
        .catch(error => {
          this.error = error.erro
        })
    }
  }
}
</script>

<template>
  <form @submit.prevent="doLogin()">
    <q-field icon="ion-person" class="q-my-md">
      <q-input type="text" float-label="Login" ref="username" v-model="user.username"></q-input>
    </q-field>
    <q-field icon="lock" class="q-my-md">
      <q-input type="password" float-label="Senha" v-model="user.password" ></q-input>
    </q-field>
    <q-btn color="primary" type="submit" class="full-width">Entrar</q-btn>
    {{ error }}
  </form>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import '~variables'
</style>
