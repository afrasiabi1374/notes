<template>
  <div class="index-container">
    <todo-nav></todo-nav>
    <div style="width:70%">
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="4"
            v-for="(note, index) in allNotes" :key="index" >
            <card-note :note="note" @click="formNote=note" :tags="showTag" /> 
          </v-col>
        </v-row>
        <v-btn  @click="formNote={title: '', text: ''};">new note</v-btn>
      </v-container >
      <!-- <note-form v-model="formNopte" :value="formNote" @input="(v) => formNote=v" /> -->
      <note-form v-model="formNote" v-on:changeTags="showTag = $event;logger()"/>
    </div>
  </div>
</template>
<script>
    import NoteForm from '~/components/todoNotes/NoteForm';
    import CardNote from '~/components/todoNotes/CardNote';
    import TodoNav from '~/components/todoNotes/nav/TodoNav';
    export default {
      components: {CardNote, TodoNav,NoteForm},
      data(){
        return{
          showTag:"",
          allNotes: this.$store.state.helloWorld.notes,
          formNote: undefined,
          emptyNoteForAdd:{title: "", text: ""}
        }
      },
      methods:{

      logger(){
      console.log(this.showTag);
      }

    }
  }
</script>

<style>
  .index-container{

    display: flex;
  }
</style>
