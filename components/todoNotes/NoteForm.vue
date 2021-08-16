<template>
      <v-dialog
      v-model="MyDialog"
      width="600px"
    >
      <v-card>
        <v-card-title>
          <v-text-field   :value="noteProp"/>
        </v-card-title>
          <v-textarea   :value="noteProp"></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="warning"
            text
          >
            delete
          </v-btn>
          <v-btn
            color="primary"
            text
          >
            update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  props:['MyDialog','noteProp'],
    data(){
      return{
      }
    },
    methods:{
      logger(){
        console.log(singleNote);
      }
    }
  
}
</script>

<style>

</style>