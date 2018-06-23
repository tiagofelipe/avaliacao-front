<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'
import DefaultMenu from './components/DefaultMenu'
import DashboardMenu from './components/DashboardMenu'
import EstabelecimentoStoreCheck from '../_mixins/EstabelecimentoStoreCheck'

export default {
  name: 'LayoutDefault',
  mixins: [ EstabelecimentoStoreCheck ],
  components: { DefaultMenu, DashboardMenu },
  computed: {
    ...mapGetters(['isLogged', 'currentUser', 'currentEstabelecimento']),
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
      <default-menu></default-menu>
      <dashboard-menu v-if="!isCurrentEstabelecimentoVazio"></dashboard-menu>
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
