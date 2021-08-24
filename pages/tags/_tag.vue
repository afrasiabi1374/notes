<template>
    <div  class="container-ar" >
        <h3>unarchived</h3>
        <v-row class="unarchived">
            <template v-for="(note, index) in notesOfTag" >
                <v-col v-if="note.archived === false" cols="12" sm="3" :key="index"  >
                    <card-note   :note="note" @click="formNote=note"/>
                </v-col>
            </template>
        </v-row>

        <h3>archived</h3>
        <v-row class="archived">
            <template v-for="(note, index) in notesOfTag" >
                <v-col v-if="note.archived === true" cols="12" sm="3" :key="index"  >
                    <card-note   :note="note" @click="formNote=note"/>
                </v-col>
            </template>
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
.unarchived,.archived{
    min-height: 80vh;
}
.container-ar{
    min-width: 100%;
    display: flex;
    flex-direction: column;
}
</style>