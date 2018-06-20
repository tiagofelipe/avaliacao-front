<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      opened: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser']),
    userName () {
      let n = this.currentUser.nome.trim().split(' ')
      return n.length > 1 ? n[0] + ' ' + n[n.length - 1] : n[0]
    }
  },
  methods: {
    openURL
  }
}
</script>

<template>
  <div>
    <header>
      <div class="container-logo">
        <div class="header-tools">
          <div class="dropdown" :class="{ open: opened }">
            <button class="bume-btn link btn-user-menu dropdown-toggle" @click="opened = !opened">{{ currentUser.email }}</button>
            <ul class="bm-dropdown-menu">
              <li class="bm-dropdown-item">Perfil</li>
                <router-link to="/logout" tag="li" class="bm-dropdown-item">Sair</router-link>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="container fill">
      <div class="row fill">
        <div class="col-xs-12 custom-vh">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
