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
      <div class="row">
        <div class="col-md-12">
          <h1>Funcionários Cadastrados</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 opt-bar">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="collapse" id="accountSearch">
                <div class="bm-ittybitty bm-ittybitty-left-icon">
                  <input placeholder="Buscar" type="text" class="form-control bm-form-control input_m">
                  <span class="ittybitty-icon">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <div class="bm-ittybitty bm-ittybitty-left-icon hidden-xs">
                <input placeholder="Buscar funcionário..." type="text" class="form-control bm-form-control input_m">
                <span class="ittybitty-icon">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
            <router-link :to="{ name: 'funcionario.cadastro' }">
              <button class="bm-button bm-button-default bm-button-small pull-right">Cadastrar Funcionário</button>
            </router-link>
          </div>
        </div>
      </div>
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
