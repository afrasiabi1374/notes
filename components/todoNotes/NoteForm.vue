<template>
  <v-dialog :value="value" width="600px">
    <v-card v-if="value">
      <v-card-title>
         <v-text-field v-model="formData.title"/>
      </v-card-title>
      <v-textarea   v-model="formData.text"/>
         <v-autocomplete
           v-model="items"
           :items="tags"
           outlined
           dense
           chips
           small-chips
           label="Outlined"
           multiple
           item-text="name"
           @change="$emit('changeTags',items)"
        ></v-autocomplete>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if=" (value.title || value.text )  !=='' "   color="warning" text @click="deleteNote()">delete</v-btn>
        <v-btn v-if=" (value.title || value.text )  !=='' "   color="primary" text @click="editNote()">update</v-btn>
        <v-btn v-if=" (value.title || value.text )  ==='' "   color="success" text @click="addNote()">add note</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props:['note', 'value'],
  
    data(){
      return {
        items: [],
        tags:this.$store.state.helloWorld.tags,
        
        formData:{
          title: '',
          text: '',
          id:''
        },
      
      }
    },
  watch:{
    value(){
      this.formData = this.value? JSON.parse(JSON.stringify(this.value)):{title: '', text: ''}
    }
  },
  methods:{
    dd(){
      console.log(this.items);
    },
    deleteNote(){
      this.$store.commit('helloWorld/deleteNote', this.value);
    },

    editNote(){
      this.$store.commit('helloWorld/updateNote', this.formData)
      this.$emit('input', undefined);
      // this.note = undefined
    },

    addNote(){
      this.$store.commit('helloWorld/createNote', this.formData)
    }

  },
  computed:{
    // computedTags(){
    //   return this.tags.map((e)=>{
    //     return e.name
    //   })
    // }



  }

}
</script>