<template>
  <v-dialog :value="value" width="600px">
    <v-card v-if="value">
      <v-card-title>
        <v-text-field v-model="formData.title"/>
      </v-card-title>
      <v-textarea     v-model="formData.text"/>
         <v-autocomplete
           v-model="formData.tagsId"
           :items="tags"
           outlined
           dense
           chips
           small-chips
           label="Outlined"
           multiple
           item-text="name"
           item-value="id"
        ></v-autocomplete>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if=" (value.title || value.text )  !=='' "   color="warning" text @click="deleteNote()">delete</v-btn>
        <v-btn color="primary" text @click="saveNote()">save</v-btn>
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
          id:'',
          tagsId:[]
        },
      
      }
    },
  watch:{
    value(){
      this.formData = this.value? JSON.parse(JSON.stringify(this.value)): {title: '', text: '', tagsId: []}
    }
  },
  methods:{
    dd(){
      console.log(this.items);
    },
    deleteNote(){
      this.$store.commit('helloWorld/deleteNote', this.value);
    },
    saveNote(){
      this.$store.commit('helloWorld/saveNote', this.formData)
      this.$emit('input', undefined);
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