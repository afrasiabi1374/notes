<template>
<div class="index-container">
    <todo-nav></todo-nav>
  <div style="width:70%">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          v-for="(note, index) in allNotes" :key="index"  
          cols="12"
          sm="4"
        >
          <v-card 
            class="pa-2"
            outlined
            tile 
            @click="test(note)"
          >
            <card-note  :oneNote="note"></card-note>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      <note-form :MyDialog="MyDialog" :noteProp="noteProp"></note-form>
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
      allNotes: this.$store.state.helloWorld.notes,
      singleNote:"",
      MyDialog: false,
      noteProp: undefined,
      editTitle: "",
      editedNote: {
        id: 1,
        title: "taghi",
        text: "taghi nazhad"
      }
    }
  },
  methods:{
    deleteNote(){
      this.$store.commit('helloWorld/deleteNote', this.myValueDialog[1])
    },
    editNote(){
      if (this.myValueDialog !== undefined) {
        this.$store.commit('helloWorld/updateNote', this.myValueDialog[0])
      }
    },
    test(note){
      this.MyDialog=!this.MyDialog
      this.noteProp = note
    }
  }
}
</script>

<style>
.index-container{

display: flex;
}
</style>
