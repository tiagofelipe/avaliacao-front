<script>
export default {
  name: 'ListaFuncionarios',
  data () {
    return {
      funcionarios: [
        {
          id: 1,
          nome: 'Raphael Henrique Silva Oliva',
          cargo: 'Developer',
          nota: 5
        },
        {
          id: 2,
          nome: 'Sherlock Holmes',
          cargo: 'Consulting detective',
          nota: 4
        }
      ]
    }
  }
}
</script>

<template>
  <q-page padding>
    <q-card inline class="card q-ma-sm" v-for="f in funcionarios" :key="f.id">
      <q-card-media>
        <img src="~assets/bg-menu.png" class="picture" height="150">
      </q-card-media>
      <q-card-title class="relative-position">
        <div class="ellipsis"><small>{{ f.nome }}</small></div>
        <q-rating slot="subtitle" v-model="f.nota" :max="5" ></q-rating>
      </q-card-title>
      <q-card-main>
        <p>{{ f.cargo }}</p>
        <!--p class="text-faded">Description</p-->
      </q-card-main>
      <q-card-separator ></q-card-separator>
      <q-card-actions>
        <q-btn flat round icon="edit" color="positive"></q-btn>
        <q-btn flat round icon="delete" color="negative"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style scoped>
  .picture {
  }
  .card {
    width: 200px;
  }
</style>
