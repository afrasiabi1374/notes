<template>
  <v-card class="card" elevation="2" outlined @click="$emit('click')">
    <h2> {{note.title}} </h2>
    <br>
    <p> {{  note.text.substr(0,21)+'...'}} </p>
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
</style>

