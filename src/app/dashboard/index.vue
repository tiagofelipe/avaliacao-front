<script>
import { mapGetters } from 'vuex'
import { isObjEmpty } from '../../utils/helpers/utils'
import Estatisticas from './components/Estatisticas'
import EstabelecimentoService from '../../domain/estabelecimento/services/estabelecimento'

export default {
  name: 'PageIndex',
  components: { Estatisticas },
  data () {
    return {
      estabelecimentos: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['currentEstabelecimento', 'currentUser']),
    isCurrentEstabelecimentoVazio () {
      return isObjEmpty(this.currentEstabelecimento)
    }
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
    },
    selecionaEstabelecimento (estabelecimento) {
      this.$store.dispatch('setCurrentEstabelecimento', {...estabelecimento}) // TODO: Implementar ação?
    }
  }
}
</script>

<template>
  <div>
    <div class="account-list-container" v-if="!isCurrentEstabelecimentoVazio">
      <estatisticas></estatisticas>
    </div>
    <div class="empty-msg" v-else-if="(estabelecimentos.length === 0) && !isLoading">
      <q-alert type="warning" message="Você não cadastrou estabelecimento"></q-alert>
    </div>
    <div class="account-list-container" v-else-if="estabelecimentos.length > 0 && !isLoading">
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
      <div class="row">
        <div class="lista-contas">
          <div class="conta panel-active" v-for="e in estabelecimentos" :key="e.id">
            <div class="conta-head">
              <span class="conta-name"><!--i class="fa fa-instagram"></i--> {{ e.nomeFantasia }}</span>
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
                  <button class="bm-button bm-button-small bm-button-secondary" @click="selecionaEstabelecimento(e)">Dashboard</button>
                </a>
              </div>
            </div>
            <!-- /infos-conta -->
          </div>
          <!-- end ngRepeat: a in vm.filteredAccounts = (vm.accounts | accountListFilter: vm.filters | accountListDateFilter: vm.dateFilter ) -->
          <!-- conta -->
        </div>
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
