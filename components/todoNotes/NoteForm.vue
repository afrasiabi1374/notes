<template>
  <v-dialog :value="value" width="600px" >
    <v-card v-if="value">
      <v-card-title>
         <v-text-field v-model="formData.title" />
      </v-card-title>
      <v-textarea   v-model="formData.text" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" text @click="deleteNote()">delete</v-btn>
        <v-btn color="primary" text @click="editNote()">update</v-btn>
        <v-btn color="success" text @click="addNote()">add note</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props:['note', 'value'],
  
    data(){
      return {
        formData:{
          title: '',
          text: '',
          id:''
        },
      
      }
    },
  watch:{
    value(){
      this.formData = this.value? JSON.parse(JSON.stringify(this.value)): {title: '', text: ''}
    }
  },
  methods:{

        deleteNote(){
        
          this.$store.commit('helloWorld/deleteNote', this.note);
          
        },

        editNote(){

          this.$store.commit('helloWorld/updateNote', this.formData)
          this.$emit('input', undefined);
          // this.note = undefined
        },

        addNote(){
         
          this.$store.commit('helloWorld/createNote', this.formData)
          
        }

}

}
</script>