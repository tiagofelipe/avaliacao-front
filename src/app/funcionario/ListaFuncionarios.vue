<script>
import FuncionarioService from '../../domain/funcionario/services/funcionario'

export default {
  name: 'ListaFuncionarios',
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
    deleteFuncionario (id, index) {
      this.$q.dialog({
        title: 'Atenção',
        message: 'O funcionário será excluído do sistema. Tem certeza?',
        ok: 'SIM',
        cancel: 'NÃO'
      }).then(() => {
        FuncionarioService.deleteFuncionario(id)
          .then(result => {
            this.funcionarios.splice(index, 1)
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
  <q-page padding>
    <span v-if="(funcionarios.length === 0) && !isLoading">Não há funcionários cadastrados</span>
    <div v-else-if="funcionarios.length > 0">
      <q-card inline class="card q-ma-sm" v-for="(f, index) in funcionarios" :key="f.id">
        <q-card-media>
          <img src="~assets/bg-menu.png" class="picture" height="150">
        </q-card-media>
        <q-card-title class="relative-position">
          <div class="ellipsis"><small>{{ f.nome }}</small></div>
          <q-rating slot="subtitle" v-model="f.nota" :max="5" readonly></q-rating>
        </q-card-title>
        <q-card-main>
          <p>{{ f.cargo }}</p>
          <!--p class="text-faded">Description</p-->
        </q-card-main>
        <q-card-separator ></q-card-separator>
        <q-card-actions align="around">
          <q-btn flat color="positive">Editar</q-btn>
          <q-btn flat color="negative" @click="deleteFuncionario(f.id, index)">Excluir</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <q-inner-loading :visible="isLoading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </q-page>
</template>

<style scoped>
  .picture {
  }
  .card {
    width: 200px;
  }
</style>
