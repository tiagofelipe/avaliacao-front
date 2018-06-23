<script>
import { mapGetters } from 'vuex'
import EstabelecimentoService from '../../domain/estabelecimento/services/estabelecimento'
import EstabelecimentoStoreCheck from '../_mixins/EstabelecimentoStoreCheck'
import EstabelecimentoItem from './components/EstabelecimentoItem'

export default {
  name: 'PageIndex',
  components: { EstabelecimentoItem },
  mixins: [ EstabelecimentoStoreCheck ],
  data () {
    return {
      estabelecimentos: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['currentEstabelecimento', 'currentUser'])
  },
  created () {
    this.getEstabelecimentos()
  },
  mounted () {
  },
  methods: {
    getEstabelecimentos () {
      this.isLoading = true
      EstabelecimentoService.getEstabelecimentosByUser(this.currentUser.id)
        .then(result => {
          this.estabelecimentos = result.data.estabelecimentos
          this.isLoading = false
        }) // TODO: CATCH
    }
  }
}
</script>

<template>
  <div  class="account-list-container">
    <div class="row">
      <div class="col-md-12">
        <h1>Estabelecimentos Cadastrados</h1>
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
              <input placeholder="Buscar" type="text" class="form-control bm-form-control input_m">
              <span class="ittybitty-icon">
                  <i class="fa fa-search"></i>
                </span>
            </div>
          </div>
          <div class="col-xs-4 col-sm-3">
            <q-btn color="primary" type="submit" class="full-width no-shadow">Adicionar Estabelecimento</q-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="!isLoading">
      <div class="lista-contas">
        <span v-if="estabelecimentos.length === 0">Você não cadastrou estabelecimentos</span>
        <div v-else>
          <estabelecimento-item :estabelecimento="e" v-for="e in estabelecimentos" :key="e.id"></estabelecimento-item>
        </div>
        <!-- end ngRepeat: a in vm.filteredAccounts = (vm.accounts | accountListFilter: vm.filters | accountListDateFilter: vm.dateFilter ) -->
        <!-- conta -->
      </div>
    </div>
    <q-inner-loading :visible="isLoading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>

<style scoped>
  .conta {
    width: 300px;
    text-overflow: ellipsis;
  }
  .conta-name {
    font-size: 1.2rem;
  }
</style>
