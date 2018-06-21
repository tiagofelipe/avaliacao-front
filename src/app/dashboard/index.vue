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
          /* if (result.data.estabelecimentos.length === 1) {
              this.selecionaEstabelecimento(result.data.estabelecimentos[0])
            } */
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
          <h3>Estabelecimentos Cadastrados</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 opt-bar">
          <div class="row">
            <div class="col-xs-12 col-md-3">
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
            <div class="col-xs-3">
              <b>Status:</b>
              <div class="btn-group">
                <select class="bm-dropdown-select-simple" >
                  <option label="Todas" value="object:13" selected="selected">Todas</option>
                  <option label="Ativas" value="object:14">Ativas</option>
                  <option label="Pausadas" value="object:15">Pausadas</option>
                  <option label="Expiradas" value="object:16">Expiradas</option>
                </select>
              </div>
            </div>
            <div class="col-xs-5 col-sm-6 col-md-3">
              <b>Expira em:</b>
              <div class="btn-group">
                <select class="bm-dropdown-select-simple">
                  <option label="Qualquer Data" value="string:Qualquer Data" selected="selected">Qualquer Data</option>
                  <option label="Hoje" value="string:Hoje">Hoje</option>
                  <option label="Amanhã" value="string:Amanhã">Amanhã</option>
                  <option label="Próxima Semana" value="string:Próxima Semana">Próxima Semana</option>
                  <option label="Próximo Mês" value="string:Próximo Mês">Próximo Mês</option>
                  <option label="Mês Atual" value="string:Mês Atual">Mês Atual</option>
                  <option label="Próximos 7 dias" value="string:Próximos 7 dias">Próximos 7 dias</option>
                  <option label="Próximos 30 dias" value="string:Próximos 30 dias">Próximos 30 dias</option>
                </select>
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
              <img profile-img="solutionplaceblindagem" class="img-circle profile-pic" src="https://api.bume.io/api/accounts/solutionplaceblindagem/picture">
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
      <q-card inline class="q-ma-sm bigger" v-for="e in estabelecimentos" :key="e.id" style="max-width: 350px">
        <q-card-title>
          {{ e.nomeFantasia }}
          <span slot="subtitle">Subtitle</span>
        </q-card-title>
        <q-card-main>
          main content
        </q-card-main>
        <q-card-separator >

        </q-card-separator>
        <q-card-actions>
          <q-btn flat color="primary" @click="selecionaEstabelecimento(e)">Selecionar</q-btn>
        </q-card-actions>
      </q-card>
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
