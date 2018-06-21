<script>
export default {
  name: 'Estatisticas'
}
</script>

<template>
  <div class="flex flex-center">
    <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="9999" detail="AVALIAÇÕES"></q-alert>
    <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="77" detail="RESENHAS"></q-alert>
    <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="989" detail="SOMETHING"></q-alert>
    <q-alert class="q-ma-sm statistic" icon="cloud" color="primary" message="1" detail="SOMETHING ELSE"></q-alert>
  </div>
</template>

<style scoped lang="stylus">
  @import "~variables"
  .statistic
    display: inline-block;
    min-width: 150px;
</style>
