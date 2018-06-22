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
  <div class="layout-padding login-page full-height">
    <div class="login">
      <span class="auth-title">Login</span>
      <login></login>
    </div>
  </div>
</template>

<style scoped>
  .full-height {
    height: 100vh !important;
  }
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black url("assets/bg.png") no-repeat center;
    background-size: cover;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .login {
    width: 500px;
    background-color: #fff;
    padding: 50px;
  }
  .auth-title {
    font-size: 2rem;
  }
</style>
