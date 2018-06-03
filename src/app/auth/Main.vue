<script>
import Login from './components/Login'

export default {
  name: 'Auth',
  components: { Login },
  data () {
    return {}
  },
  computed: {},
  mounted () {
  },
  destroyed () {
  },
  methods: {}
}
</script>

<template>
  <q-page class="layout-padding login-page">
    <div class="login">
      <span class="auth-title">Login</span>
      <login></login>
    </div>
  </q-page>
</template>

<style scoped>
  .full-height {
    height: 100vh !important;
  }
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("assets/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .login {
    width: 450px;
    background-color: #fff;
    padding: 20px;
  }
  .auth-title {
    font-size: 2rem;
    font-weight: lighter;
  }
</style>
