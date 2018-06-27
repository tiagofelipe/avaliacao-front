<script>
import FuncionarioService from '../../domain/funcionario/services/funcionario'
import { mapGetters } from 'vuex'

export default {
  name: 'CadastroFuncionario',
  data () {
    return {
      funcionario: {
        nome: '',
        cargo: '',
        estabelecimento: ''
      },
      formData: null,
      isRegistering: false
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'currentEstabelecimento'])
  },
  created () {
    this.funcionario.estabelecimento = this.currentEstabelecimento.id
  },
  mounted () {
    this.$refs.nome.focus()
  },
  methods: {
    cadastraFuncionario () {
      this.isRegistering = true
      this.$q.loading.show()
      FuncionarioService.cadastrar({...this.funcionario})
        .then(result => {
          FuncionarioService.uploadFile(this.formData, result.data.id)
            .then(result => {
              console.log(result.data)
              this.isRegistering = false
              let tmp = this.url
              let d = new Date()
              this.url = ''
              this.url = tmp + '?' + d.getTime()
              // this.reset()
              this.$router.push({name: 'funcionario.lista', query: {sucesso: 1}})
              this.$q.loading.hide()
            })
            .catch(error => {
              console.log('erro aqui', error)
              if (error.response.status === 400) {
                this.isRegistering = false
                this.errorMsg = 'Houve um erro com a imagem. Tente novamente'
                this.erro = error.response.data.errors
              }
            })
        })
        .catch(error => {
          console.log(error.response.data.error)
        })
    },
    setFile (event) {
      let arquivo = event.target.files[0]
      let formData = new FormData()

      formData.append('file', arquivo, arquivo.name)

      this.formData = formData
      this.arquivo = arquivo.name

      console.log('arquivo', arquivo)
      console.log('formdata', formData)
      // document.getElementById('fileInpt').value = ''
    }
  }
}
</script>

<template>
  <div>
    <h4>Cadastro de Funcionário</h4>
    <form @submit.prevent="cadastraFuncionario">
      <input placeholder="Nome" type="text" class="form-control bm-form-control input_m q-my-md" ref="nome" v-model="funcionario.nome" />
      <input placeholder="Cargo" type="text" class="form-control bm-form-control input_m q-my-md" v-model="funcionario.cargo" />
      <input type="file" id="fileInpt" ref="uploadFile" accept="image/*" @change="setFile($event)">
      <q-btn color="primary" type="submit" class="full-width">Cadastrar</q-btn>
    </form>
  </div>
</template>

<style scoped>

</style>
