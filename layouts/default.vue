<template>
  <v-app>
    <v-toolbar dark color="teal">
    <v-toolbar-title>State selection</v-toolbar-title>
      <v-autocomplete
        v-model="select"
        :items="filterNotesTitle"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="search"
        solo-inverted
        item-text="title"
        item-value="id"
        clearable
        @change="autoCompeleteFindDialog"
      ></v-autocomplete>
    </v-toolbar>
    <div class="index-container">
      <!-- to do nav -->
        <todo-nav></todo-nav>
       <!--end to do nav -->
      <div class="main-content">
      <nuxt/>

      <!-- <note-form v-model="formNopte" :value="formNote" @input="(v) => formNote=v" /> -->
      <note-form v-model="formNote" fff />
    </div>
    </div>   
  </v-app>
</template>
<script>
  import CardNote from '~/components/todoNotes/CardNote';
  import NoteForm from '~/components/todoNotes/NoteForm';
  import TodoNav from '~/components/todoNotes/nav/TodoNav'
  import ToolBar from '~/components/todoNotes/ToolBar'
  export default {
    components:{NoteForm,TodoNav,ToolBar,CardNote},
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        formNote: undefined,
        emptyNoteForAdd:{title: "", text: ""},
      }
    },
    watch: {
      select(){
        console.log('this is for items = ',this.select);
      }
    },
    computed:{

    },
    methods: {
      autoCompeleteFindDialog(){
        this.formNote = this.$store.state.helloWorld.notes.find(e => e.id == this.select)
      }
    },
    computed:{
        filterNotesTitle(){
          return this.$store.getters['helloWorld/archivedOrUnarchivedNotes'](false)
        }, 
        filterNotes(){
          return this.$store.getters['helloWorld/archivedOrUnarchivedNotes'](false)
        }  
    }
  }
</script>
<style>
  .index-container{
    display: flex;
  }
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