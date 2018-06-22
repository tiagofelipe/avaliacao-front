<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'
import { isObjEmpty } from '../../utils/helpers/utils'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      opened: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser', 'currentEstabelecimento']),
    userName () {
      let n = this.currentUser.nome.trim().split(' ')
      return n.length > 1 ? n[0] + ' ' + n[n.length - 1] : n[0]
    },
    isCurrentEstabelecimentoVazio () {
      return isObjEmpty(this.currentEstabelecimento)
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
      <div class="menu-bar" v-if="!isCurrentEstabelecimentoVazio">
        <div class="dashboard-menu">
          <div class="tabs" id="tabs" md-autoselect="">
            <div class="tab active">Dashboard</div>
            <div class="tab">Avaliações</div>
            <div class="tab">Funcionários</div>
            <div class="tab">Critérios de Avaliação</div>
            <div class="tab">Perfil</div>
            <div class="tab">Configurações</div>
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
