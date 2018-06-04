<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      estabelecimentos: [
        { id: 34, nomeFantasia: 'Estabelecimento 1' },
        { id: 33, nomeFantasia: 'Estabelecimento 2' }
      ]
    }
  },
  methods: {
    getEstabelecimentos () {
      console.log('implementar')
    }
  }
}
</script>

<template>
  <q-page padding>
    <div class="empty-msg" v-if="estabelecimentos.length === 0">

    </div>
    <div class="alerts flex flex-center">
      <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="9999" detail="AVALIAÇÕES"></q-alert>
      <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="77" detail="RESENHAS"></q-alert>
      <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="989" detail="SOMETHING"></q-alert>
      <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="1" detail="SOMETHING ELSE"></q-alert>
    </div>
  </q-page>
</template>

<style scoped>
  .statistic {
    display: inline-block;
    width: 200px;
  }
  .alerts {
  }
</style>
