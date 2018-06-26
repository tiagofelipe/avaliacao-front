<script>
import FuncionarioService from '../../domain/funcionario/services/funcionario'
import FuncionarioItem from './components/FuncionarioItem'

export default {
  name: 'ListaFuncionarios',
  components: { FuncionarioItem },
  data () {
    return {
      funcionarios: [],
      isLoading: false,
      errorMsg: null
    }
  },
  mounted () {
    this.getFuncionarios()
  },
  methods: {
    getFuncionarios () {
      this.isLoading = true
      FuncionarioService.getFuncionarios(this.$store.getters.currentEstabelecimento.id)
        .then(result => {
          console.log(result.data)
          this.funcionarios = result.data
          this.funcionarios[0].nota = 4
          this.isLoading = false
        })
        .catch(error => {
          if (error.response.data.status === 404) {
            this.errorMsg = 'Não há funcionários cadastrados'
            this.isLoading = false
          }
        })
    },
    deleteFuncionario (index) {
      this.funcionarios.splice(index, 1)
    }
  }
}
</script>

<template>
  <div class="row">
    <span v-if="(funcionarios.length === 0) && !isLoading">Não há funcionários cadastrados</span>
    <div class="account-list-container" v-else-if="funcionarios.length > 0">
      <div class="lista-contas">
        <funcionario-item v-for="(f, index) in funcionarios" :key="f.id" :funcionario="f" @deleteFuncionario="deleteFuncionario(index)"></funcionario-item>
      </div>
    </div>
    <q-inner-loading :visible="isLoading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>

<style scoped>
  .picture {
  }
  .card {
    width: 200px;
  }
  .small-text {
    font-size: 1rem;
  }
</style>
