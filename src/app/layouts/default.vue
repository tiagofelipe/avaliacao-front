<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
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
  <q-layout view="lHh Lpr lFf">
    <q-layout-header  v-if="isLogged">
      <q-toolbar color="primary" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" ></q-icon>
        </q-btn>

        <q-toolbar-title>
          Software Avaliação
          <div slot="subtitle">Bem-vindo!</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-white' : null" v-if="isLogged">
      <div class="menu-header">
        <div class="user-avatar">
          <span class="letter">{{ currentUser.nome.trim().substr(0, 1).toUpperCase() }}</span>
        </div>
        <div class="user-name">{{ userName }}</div>
      </div>
      <q-list no-border link inset-delimiter>
        <q-item link to="/">
          <q-item-side icon="ion-home" ></q-item-side>
          <q-item-main>
            <q-item-tile label>Dashboard</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item-separator></q-item-separator>
        <q-collapsible icon="send" label="Estabelecimento">
          <q-item link :to="{ name: 'estabelecimento.cadastro' }">
            <q-item-side icon="add" ></q-item-side>
            <q-item-main label="Cadastrar" ></q-item-main>
          </q-item>
        </q-collapsible>
        <q-collapsible icon="send" label="Funcionário">
          <q-item link :to="{ name: 'funcionario.cadastro' }">
            <q-item-side icon="add" ></q-item-side>
            <q-item-main label="Cadastrar" ></q-item-main>
          </q-item>
        </q-collapsible>
        <q-item-separator></q-item-separator>
        <q-item link to="/logout" v-if="isLogged">
          <q-item-side icon="ion-log-out" ></q-item-side>
          <q-item-main>
            <q-item-tile label>Sair</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view ></router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="stylus">
  @import '~variables';
  .menu-header
    background-color: $secondary;
    background-image: url('../../assets/bg-menu.png')
    height: 150px;
    display: flex;
    align-items: center;
    color: #fff;
  .user-avatar
    background-color: $primary;
    font-size: 1.5rem;
    margin: 10px 20px 10px 10px;
    padding: 25px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  .letter
    position: absolute;
</style>
