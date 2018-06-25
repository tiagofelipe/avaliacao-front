<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultMenu',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      opened: false
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>

<template>
  <div class="container-logo">
    <div class="header-tools">
      <div class="dropdown" :class="{ open: opened }">
        <button class="bume-btn link btn-user-menu dropdown-toggle row-inline" @click="opened = !opened">
          {{ currentUser.email }} <i class="fa fa-user-circle" style="color: #000"></i>
        </button>
        <ul class="bm-dropdown-menu">
          <li class="bm-dropdown-item">Perfil</li>
          <router-link to="/logout" tag="li" class="bm-dropdown-item">Sair</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
