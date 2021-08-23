<template>
    <div>
        <h3>unarchived</h3>
        <v-row no-gutters style="">
            <v-col cols="12" sm="4"
                v-for="(note, index) in notesOfTag" :key="index">
                <card-note  v-if="note.archived === false" :note="note" @click="formNote=note"/>
            </v-col>
        </v-row>
        <h3>archived</h3>
        <v-row no-gutters style="">
            <v-col cols="12" sm="4" v-for="(note, index) in notesOfTag" :key="index">
            <card-note  v-if="note.archived === true" :note="note" @click="formNote=note"/>
        </v-col>
        </v-row>

    </div>


</template>

<script>
import CardNote from '~/components/todoNotes/CardNote';
export default {
    components: {CardNote},
    data(){
        return{
            tagParam:this.$route.params.tag,
            notesOfTag:undefined
        }
    },
        created(){
            this.notesOfTag=this.$store.getters['helloWorld/notesByTag'](this.tagParam)

        },


}
</script>

<style>

</style>