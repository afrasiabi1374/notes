<template>

    
    <div style="width:70%">

      <v-container class="grey lighten-5">
              
        <v-row no-gutters style="">
          <v-col cols="12" sm="4" 
            v-for="(note, index) in allNotes" :key="index">
            <card-note :note="note" @click="formNote=note"/>
          </v-col>
          <v-btn
            class="mx-2 add-btn"
            fab
            dark
            color="indigo"
            @click="formNote={title: '', text: '', tagsId: []};"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-container >
      <!-- <note-form v-model="formNopte" :value="formNote" @input="(v) => formNote=v" /> -->
      <note-form v-model="formNote" />

    </div>
 
</template>
<script>
    import NoteForm from '~/components/todoNotes/NoteForm';
    import CardNote from '~/components/todoNotes/CardNote';
    import TodoNav from '~/components/todoNotes/nav/TodoNav';

    export default {
      components: {CardNote,TodoNav,NoteForm},
  
      data(){
        return{     
          allNotes: this.$store.state.helloWorld.notes,
          formNote: undefined,
          emptyNoteForAdd:{title: "", text: ""},
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
  .add-btn{
    position: relative;
    top: 14%;
    left: 11%;
    padding: 55px;
    font-size: 2em;
  } 
  .nav-bar{
    width: 25%;
    min-height: 100%;
  }
</style>
