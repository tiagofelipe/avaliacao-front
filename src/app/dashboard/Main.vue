<script>
import Grafico from './components/Grafico'
import InfoBox from './components/InfoBox'

export default {
  name: 'Main',
  components: { Grafico, InfoBox }
}
</script>

<template>
  <div class="row">
    <div class="col-md-8 col-xs-12 col-sm-12">
      <grafico></grafico>
    </div>
    <div class="col-md-4 col-xs-12 col-sm-12">
      <div class="row">
        <info-box info="Avaliações" :value="1234" class="col-xs-12 col-sm-6 col-md-12"></info-box>
        <info-box info="resenhas" :value="55" class="col-xs-12 col-sm-6 col-md-12"></info-box>
        <info-box info="Funcionários cadastrados" :value="79" class="col-xs-12 col-sm-6 col-md-12"></info-box>
        <info-box info="TESTE" :value="939399" class="col-xs-12 col-sm-6 col-md-12"></info-box>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
