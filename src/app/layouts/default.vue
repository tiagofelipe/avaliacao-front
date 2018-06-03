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
    firstName () {
      let n = this.currentUser.nome.split(' ')
      return n[0]
    }
  },
  methods: {
    openURL
  }
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" v-if="isLogged">
          <q-icon name="menu" ></q-icon>
        </q-btn>

        <q-toolbar-title>
          Software Avaliação
          <div slot="subtitle" v-if="$store.getters.isLogged">Você está logado como {{ firstName }}</div>
          <div slot="subtitle" v-else>Bem-vindo!</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-white' : null" v-if="isLogged">
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
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

<style>
</style>
