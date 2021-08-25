<template>
    <div class="main-content">
        <v-row no-gutters style="">
          <template v-for="(note, index) in filterNotes" >
            <v-col  cols="12" sm="4" :key="index" >
              <card-note  :note="note" @click="formNote=note"/>
            </v-col>
          </template>
          <v-btn
            class="mx-2 add-btn"
            fab
            dark
            color="teal"
            @click="formNote={title: '', text: '', tagsId: []};"
          >
            <v-icon style="font-size: 2em;">mdi-pen-plus</v-icon>
          </v-btn>
        </v-row>
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
          // allNotes: this.$store.getters['helloWorld/showUnarchived'],
          formNote: undefined,
          emptyNoteForAdd:{title: "", text: ""},
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
      methods:{
      logger(){
      console.log(this.showTag);
      }
    },
    created(){
      
    }
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
  width: 70%;
  margin: auto;
}
</style>
