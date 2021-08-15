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
        <v-card @click="MyDialog=true;myValueDialog=Note;logger()" 
          class="pa-2"
          outlined
          tile
        >
           <card-note  :oneNote="Note"></card-note>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
<dialog></dialog>
    <v-row justify="center">
    <v-dialog
      v-model="MyDialog"
      width="600px"
    >
      <v-card>
        <v-card-title>
          <todo-title  v-if="myValueDialog!==undefined"  :toTitle="myValueDialog.title"></todo-title>
        </v-card-title>
          <todo-text v-if="myValueDialog!==undefined" :toText="myValueDialog.text" ></todo-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
import CardNote from '~/components/todoNotes/CardNote';
import TodoNav from '~/components/todoNotes/nav/TodoNav';
export default {
  components:{CardNote,TodoNav},
data(){
  return{
    allNotes:this.$store.state.helloWorld.notes,
    MyDialog:false,
    myValueDialog:undefined
  }
},
methods:{
 
logger(){
  console.log(this.myValueDialog);
}


}
}
</script>

<style>

</style>
