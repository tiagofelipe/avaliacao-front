<script>
import EstabelecimentoService from '../../domain/estabelecimento/services/estabelecimento'

export default {
  name: 'CadastroEstabelecimento',
  data () {
    return {
      estabelecimento: {
        cnpj: '',
        nomeFantasia: '',
        razaoSocial: '',
        tipo: ''
      }
    }
  },
  mounted () {
    this.$refs.cnpj.focus()
  },
  methods: {
    cadastraEstabelecimento () {
      EstabelecimentoService.cadastrar({...this.estabelecimento})
        .then(result => {
          console.log(result.data)
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="cadastraEstabelecimento">
      <input placeholder="CNPJ" type="text" class="form-control bm-form-control input_m q-my-md" ref="cnpj" v-model="estabelecimento.cnpj" />
      <input placeholder="Nome Fantasia" type="text" class="form-control bm-form-control input_m q-my-md" v-model="estabelecimento.nomeFantasia" />
      <input placeholder="Razão Social" type="text" class="form-control bm-form-control input_m q-my-md" v-model="estabelecimento.razaoSocial" />
      <input placeholder="Tipo" type="text" class="form-control bm-form-control input_m q-my-md" v-model="estabelecimento.tipo" />
      <q-btn color="primary" type="submit" class="full-width">Cadastrar</q-btn>
    </form>
  </div>
</template>

<style scoped>

</style>
