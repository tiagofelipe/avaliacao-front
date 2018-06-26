<script>
import FuncionarioService from '../../../domain/funcionario/services/funcionario'

export default {
  name: 'FuncionarioItem',
  props: {
    funcionario: {
      required: true,
      type: Object
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
    deleteFuncionario () {
      this.$q.dialog({
        title: 'Atenção',
        message: 'O funcionário será excluído do sistema. Tem certeza?',
        ok: 'SIM',
        cancel: 'NÃO'
      }).then(() => {
        this.$q.loading.show()
        FuncionarioService.deleteFuncionario(this.funcionario.id)
          .then(result => {
            this.$emit('deleteFuncionario')
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Funcionário excluído!',
              type: 'positive'
            })
          })
          .catch(error => {
            this.$q.notify('Houve um problema ao excluir o funcionário.')
            console.log(error.response.data)
          })
      }).catch(() => {
        return false
      })
    }
  }
}
</script>

<template>
  <div class="funcionario-container conta">
    <img class="img-circle" src="https://api.bume.io/api/accounts/solutionplaceblindagem/picture" :height="100">
    <div class="funcionario-info">
      <small class="funcionario-nome">{{ funcionario.nome }}</small>
      <span class="funcionario-cargo">{{ funcionario.cargo }}</span>
      <div class="funcionario-rating">
        <q-rating readonly slot="subtitle" v-model="funcionario.nota" :max="5" v-if="funcionario.nota > 0"></q-rating>&nbsp;&nbsp;&nbsp;
        <span class="text-faded" :class="{ 'small-text': funcionario.nota < 1 }">{{ funcionario.nota | formatarNota }}</span>
      </div>
    </div>
    <div class="funcionario-toolbar">
      <q-btn color="secondary" flat>EDITAR</q-btn>
      <q-btn color="negative" flat @click="deleteFuncionario">EXCLUIR</q-btn>
    </div>
  </div>
</template>

<style scoped>
  .small-text {
    font-size: 0.95rem;
  }
  .funcionario-container {
    width: 250px;
    height: 350px;
    background-color: #fff;
    padding: 30px 20px 5px 20px!important;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .funcionario-info {
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 15px auto;
  }
  .funcionario-nome, .funcionario-cargo {
    text-align: center;
  }
  .funcionario-nome {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .funcionario-rating {
    font-size: 1.5rem;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }
  .funcionario-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
