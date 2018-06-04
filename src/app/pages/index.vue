<script>
import { mapGetters } from 'vuex'
import { isObjEmpty } from '../../utils/helpers/utils'
import Estatisticas from './components/Estatisticas'

export default {
  name: 'PageIndex',
  components: { Estatisticas },
  data () {
    return {
      estabelecimentos: [{ id: 4, nomeFantasia: 'Estabelecimento' },
        { id: 13, nomeFantasia: 'Estabelecimento com Nome Fantasia Grande' },
        { id: 23, nomeFantasia: 'Estabelecimento com 2' }
      ]
    }
  },
  computed: {
    ...mapGetters(['currentEstabelecimento']),
    isCurrentEstabelecimentoVazio () {
      return isObjEmpty(this.currentEstabelecimento)
    }
  },
  created () {
    this.getEstabelecimentos()
  },
  beforeMount () {
    if (this.estabelecimentos.length === 1) {
      this.selecionaEstabelecimento(this.estabelecimentos[0])
    }
  },
  methods: {
    getEstabelecimentos () {
      console.log('implementar')
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
    <div class="empty-msg" v-else-if="estabelecimentos.length === 0">
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
  </q-page>
</template>

<style>
</style>
