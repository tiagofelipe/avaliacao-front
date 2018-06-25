<script>
export default {
  name: 'EstabelecimentoItem',
  props: {
    estabelecimento: {
      type: Object,
      required: true
    }
  },
  methods: {
    selecionaEstabelecimento () {
      this.$store.dispatch('setCurrentEstabelecimento', {...this.estabelecimento})
        .then(() => {
          this.$router.push('/dashboard')
        })
    }
  }
}
</script>

<template>
    <div class="conta panel-active">
      <div class="conta-head">
        <span class="conta-name"><i class="fa fa-instagram"></i> {{ estabelecimento.nomeFantasia }}</span>
      </div>
      <div class="heading-conta">
        <img class="img-circle profile-pic" src="https://api.bume.io/api/accounts/solutionplaceblindagem/picture">
        <div class="seguidores">
          <strong class="ng-binding">12.229</strong> <span>Seguidores</span>
        </div>
        <!-- Exibir este bloco abaixo apenas se houver novos seguidores -->
        <div class="seguidores">
          <strong class="ng-binding">
            <i ng-show="a.newFollowersSinceStart" class="fa fa-caret-up" aria-hidden="false">

            </i>2.364</strong> <span>Novos</span>
        </div>
      </div>
      <div class="infos-conta">
        <!-- Conta ativa sem erros -->
        <div class="plan-content">
          <div class="plan-data">
            <!--p ng-if="a.planTitle &amp;&amp; !a.remainingTime" class="ativa ng-scope">Conta Ativa</p>
            <p ng-if="a.planTitle &amp;&amp; !a.remainingTime" class="ng-binding ng-scope">(Plano Mensal)</p-->
          </div>
          <a class="">
            <button class="bm-button bm-button-small bm-button-secondary" @click="selecionaEstabelecimento()">Dashboard</button>
          </a>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
