<template>
    <div  class="container-ar" >
        <h3>unarchived</h3>
        <v-row class="unarchived">
            <template v-for="(note, index) in filterNotesUnarchive" >
                <v-col  cols="12" sm="4" :key="index"  >
                    <card-note   :note="note" @click="formNote=note"/>
                </v-col>
            </template>
        </v-row>
        <h3>archived</h3>
        <v-row class="archived">
            <template v-for="(note, index) in filterNotesArchive" >
                <v-col v-if="note.archived === true" cols="12" sm="4" :key="index"  >
                    <card-note   :note="note" @click="formNote=note"/>
                </v-col>
            </template>
        </v-row>
        <note-form v-model="formNote" />
    </div>


</template>

<script>
import CardNote from '~/components/todoNotes/CardNote';
import NoteForm from '~/components/todoNotes/NoteForm';

export default {
    components: {CardNote,NoteForm},
    data(){
        return{
            formNote: undefined,
            tagParam:this.$route.params.tag,
            notesOfTag:undefined
        }
    },
    created(){
        this.notesOfTag=this.$store.getters['helloWorld/notesByTag'](this.tagParam)
            
    },
    computed:{
        filterNotesUnarchive(){
          return this.$store.getters['helloWorld/archivedOrUnarchivedNotes'](false, this.tagParam)
        },  
        filterNotesArchive(){
          return this.$store.getters['helloWorld/archivedOrUnarchivedNotes'](true, this.tagParam)
        },  
    }
}
</script>

<style>
.container-ar{
  width: 70%;
  margin: auto;
    
}
.unarchived,.archived{
    min-height: 80vh;
}

</style>