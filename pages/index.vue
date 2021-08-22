<template>
  <div class="index-container">
    <div width="25%" style="position:relative">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="primary" ></v-app-bar-nav-icon>
      <v-navigation-drawer hide-overlay 
        v-model="drawer"
        relative
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="(tagItem,index) in menuTags" :key="index" >
              <v-list-item-title>
                <nuxt-link :to="'/' + `${tagItem.id}`" class="app-bar-link-item" >{{tagItem.name}} </nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
</div>
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
          formNote: undefined,
          emptyNoteForAdd:{title: "", text: ""},
          drawer: true,
          group: null,
          menuTags:this.$store.state.helloWorld.tags
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
  .add-btn{
position: relative;
top: 14%;
left: 11%;
padding: 55px;
font-size: 2em;
  }
</style>
