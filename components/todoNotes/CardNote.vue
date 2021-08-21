<template>
  <v-card class="card" elevation="2" outlined @click="$emit('click')">
    <h2> {{note.title}} </h2>
    <br>
    <p> {{  note.text.substr(0,21)+'...'}} </p>
    <div class="container">
        <v-chip v-for="t in note.tagsId" :key="t" class="ma-2" x-small>
          {{ $store.getters['helloWorld/tagLabel'](t) }}
        </v-chip>
    </div>
  </v-card>
</template>
<script>
  export default {
  props: ['note']
  }
</script>
<style >
  .card{
      padding: 30px;
      margin-bottom: 10px;
      transition: all 1s;
  }
  .card:hover{
      background-color: rgba(32, 178, 171, 0.493);
      transition: all 1s;
      cursor: pointer;
  }
  .container{
    display: flex;
  }
</style>

