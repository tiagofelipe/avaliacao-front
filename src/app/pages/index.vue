<script>
import { mapGetters } from 'vuex'
import { isObjEmpty } from '../../utils/helpers/utils'
import Estatisticas from './components/Estatisticas'
import EstabelecimentoService from '../../domain/estabelecimento/services/estabelecimento'

export default {
  name: 'PageIndex',
  components: { Estatisticas },
  data () {
    return {
      estabelecimentos: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['currentEstabelecimento', 'currentUser']),
    isCurrentEstabelecimentoVazio () {
      return isObjEmpty(this.currentEstabelecimento)
    }
  },
  created () {
    this.getEstabelecimentos()
  },
  mounted () {
  },
  methods: {
    getEstabelecimentos () {
      this.isLoading = true
      EstabelecimentoService.getEstabelecimentosByUser(this.currentUser.id)
        .then(result => {
          if (result.data.estabelecimentos.length === 1) {
            this.selecionaEstabelecimento(result.data.estabelecimentos[0])
          }
          this.estabelecimentos = result.data.estabelecimentos
          this.isLoading = false
        }) // TODO: CATCH
    },
    selecionaEstabelecimento (estabelecimento) {
      this.$store.dispatch('setCurrentEstabelecimento', {...estabelecimento}) // TODO: Implementar ação?
    }
  }
}
</script>

<template>
  <q-page padding>
    <div v-if="!isCurrentEstabelecimentoVazio">
      <estatisticas></estatisticas>
    </div>
    <div class="empty-msg" v-else-if="(estabelecimentos.length === 0) && !isLoading">
      <q-alert type="warning" message="Você não cadastrou estabelecimento"></q-alert>
    </div>
    <div v-else-if="estabelecimentos.length > 1">
      <q-card inline class="q-ma-sm bigger" v-for="e in estabelecimentos" :key="e.id" style="max-width: 350px">
        <q-card-title>
          {{ e.nomeFantasia }}
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
        <q-card-main>
          main content
        </q-card-main>
        <q-card-separator ></q-card-separator>
        <q-card-actions>
          <q-btn flat color="primary" @click="selecionaEstabelecimento(e)">Selecionar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <q-inner-loading :visible="isLoading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </q-page>
</template>

<style>
</style>
