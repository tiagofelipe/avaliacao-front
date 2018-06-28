<script>
export default {
  name: 'EstabelecimentoItem',
  props: {
    estabelecimento: {
      type: Object,
      required: true
    }
  },
  filters: {
    formatarNota (value) { // TODO: OTIMIZAR ISSO
      if (typeof value === 'undefined') {
        return
      }

      if (value < 1) {
        return '(sem avaliações)'
      }
      value = value.toString()

      if (/^\d{1,}$/.test(value)) {
        return value + ',0'
      }
      return value.replace(/\./, ',')
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
      <div class="estabelecimento-rating">
        <q-rating readonly slot="subtitle" v-model="estabelecimento.nota" :max="5" v-if="estabelecimento.nota > 0"></q-rating>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="text-faded" :class="{ 'small-text': estabelecimento.nota < 1 }">{{ estabelecimento.nota | formatarNota }}</span>
      </div>
    </div>
    <div class="heading-conta">
      <img class="img-circle profile-pic" src="https://api.bume.io/api/accounts/solutionplaceblindagem/picture">
      <strong class="conta-name">{{ estabelecimento.nomeFantasia }}</strong>
    </div>
    <div class="infos-conta">
      <div class="plan-content">
        <div class="plan-data">
        </div>
        <a class="">
          <button class="bm-button bm-button-small bm-button-secondary" @click="selecionaEstabelecimento()">Dashboard</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .estabelecimento-rating {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }
  .heading-conta>img {
    margin-right: 10px !important;
    flex: 1;
  }
  .heading-conta>strong {
    flex: 2;
  }
</style>
