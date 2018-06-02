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
  <q-page padding>
    <form @submit.prevent="cadastraEstabelecimento">
      <q-field icon="" class="q-my-md">
        <q-input type="text" float-label="CNPJ" ref="cnpj" v-model="estabelecimento.cnpj" ></q-input>
      </q-field>
      <q-field icon="" class="q-my-md">
        <q-input type="text" float-label="Nome Fantasia" v-model="estabelecimento.nomeFantasia" ></q-input>
      </q-field>
      <q-field icon="" class="q-my-md">
        <q-input type="text" float-label="Razão Social" v-model="estabelecimento.razaoSocial" ></q-input>
      </q-field>
      <q-field icon="" class="q-my-md">
        <q-input type="text" float-label="Tipo" v-model="estabelecimento.tipo" ></q-input>
      </q-field>
      <q-btn color="primary" type="submit" class="full-width">Cadastrar</q-btn>
    </form>
  </q-page>
</template>

<style scoped>

</style>
