<template>
        <v-row class="mt-6" style="">
          <template v-for="(note, index) in filterNotes" >
            <v-col  cols="12" md="4" :key="index" >
              <card-note  :note="note" @click="formNote=note;"/>
            </v-col>
          </template>
                          <v-btn
            class="mx-2 add-btn"
            fab
            dark
            color="teal"
            @click="formNote={title: '', text: '', tagsId: []};"
          >
            <v-icon style="font-size:2em;">mdi-pen-plus</v-icon>
          </v-btn>
          <note-form v-model="formNote" fff />
        </v-row>
        
</template>
<script>
    import NoteForm from '~/components/todoNotes/NoteForm';
    import CardNote from '~/components/todoNotes/CardNote';
    import TodoNav from '~/components/todoNotes/nav/TodoNav';
    export default {
      components: {CardNote,TodoNav,NoteForm},
      data(){
        return{     
          // allNotes: this.$store.getters['helloWorld/showUnarchived'],
          formNote: undefined,
        }
      },
      // watch:{
      //   allNotes(val){
      //    //  this.allNotes =   this.$store.getters['helloWorld/showUnarchived'];
      //     console.log("this is from watcher  : ",val);
      //   }
      // },
      computed:{
        // allUnarchiveNotes(){
        //   return this.$store.getters['helloWorld/showUnarchived']
        // }
        filterNotes(){
          return this.$store.getters['helloWorld/archivedOrUnarchivedNotes'](false)
        }  
      },

  }
</script>
<style>
  .add-btn{
    position: relative;
    margin-top: 6%;
    left: 11%;
    padding: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
.main-content{
  min-height: 100vh;
  width: 70%;
  margin: auto;
}
</style>
