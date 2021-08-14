<template>
  <div>
    <todo-nav></todo-nav>

    <h1>my to do app</h1> 

  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="(Note,index) in allNotes" :key="index"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
           <card-note  :oneNote="Note"></card-note>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<script>
import CardNote from '~/components/todoNotes/CardNote';
import TodoNav from '~/components/todoNotes/nav/TodoNav';
export default {
  components:{CardNote,TodoNav},
data(){
  return{

    allNotes:this.$store.state.helloWorld.notes

  }
},
methods:{
 



}
}
</script>

<style>

</style>
    CardNote
    CardNote