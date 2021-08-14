<template >
  <div >

<v-card class="card" 
  elevation="2"
  outlined
>

    <h2> {{oneNote.title}} </h2>
    <br>
    <p> {{  oneNote.text.substr(0,21)+'...'}} </p>


  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <todo-title  :toTitle="oneNote.title"></todo-title>
        </v-card-title>
          <todo-text :toText="oneNote.text"></todo-text>
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

</v-card>

  </div>
</template>

<script>
import TodoTitle from '~/components/todoNotes/TodoTitle'
import TodoText from './TodoText.vue'

export default {
components:['TodoTitleInput','TodoText'],
props:['oneNote'],
  data(){

    return{}

  }

  ,

  methods:{

    addTodo(){



            },

    deleteTodo(id){

        

    }

  }


}
</script>
<style >
.card{
  padding: 30px;
  margin-bottom: 10px;
  transition: all 1s;
}
.card:hover{
  background-color: rgba(238, 158, 171, 0.541);
  transition: all 1s;
  cursor: pointer;
}
</style>

