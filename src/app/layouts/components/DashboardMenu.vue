<script>
export default {
  name: 'DashboardMenu'
}
</script>

<template>
  <div class="menu-bar">
    <div class="dashboard-menu">
      <ul class="tabs" id="tabs">
        <router-link :to="{ name: 'dashboard.main' }" tag="li" class="tab">Dashboard</router-link>
        <router-link to="/temp" class="tab">Avaliações</router-link>
        <router-link :to="{ name: 'funcionario.lista' }" tag="li" class="tab">Funcionários</router-link>
        <router-link to="/temp" class="tab">Critérios de Avaliação</router-link>
        <router-link to="/temp" class="tab">Perfil</router-link>
        <router-link to="/temp" class="tab">Configurações</router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>
