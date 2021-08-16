<template>
  <div>
<v-card class="card" 
  elevation="2"
  outlined>

    <h2> {{oneNote.title}} </h2>
    <br>
    <p> {{  oneNote.text.substr(0,21)+'...'}} </p>

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

    return{
      
    }

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
  background-color: rgba(32, 178, 171, 0.493);
  transition: all 1s;
  cursor: pointer;
}
</style>

