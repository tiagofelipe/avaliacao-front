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
  <q-page class="layout-padding">
    <login></login>
  </q-page>
</template>

<style scoped>
  .full-height {
    height: 100vh !important;
  }
</style>
