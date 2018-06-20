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
      this.$q.loading.show()
      this.$store.dispatch('attemptLogin', {...this.user})
        .then(() => {
          if (this.$route.query.redirect && this.$route.query.redirect !== '/logout') {
            this.$router.push({path: this.$route.query.redirect})
          } else {
            this.$router.push({ name: 'index' })
          }
          this.$q.loading.hide()
        })
        .catch(error => {
          this.error = error.detail
          this.$q.loading.hide()
        })
    }
  }
}
</script>

<template>
  <form @submit.prevent="doLogin()">
    <div class="error-msg">{{ error }}</div>
    <input placeholder="Login" type="text" class="form-control bm-form-control input_m q-my-md" ref="username" v-model="user.username" />
    <input placeholder="Senha" type="text" class="form-control bm-form-control input_m q-my-md" v-model="user.password" />
    <q-btn color="primary" type="submit" class="full-width">Entrar</q-btn>
  </form>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import '~variables'
  .error-msg
    color: $negative;
    font-size: small;
    margin: 10px;
    text-align: center;
</style>
