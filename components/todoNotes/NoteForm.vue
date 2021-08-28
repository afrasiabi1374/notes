<template>
  <v-dialog :value="value" width="600px">
    <v-card v-if="value">
      <v-card-title>
        <v-text-field  
        label="title"
        :rules="rules"
        hide-details="auto" class="form-title" v-model="formData.title"/>
      </v-card-title>
      <v-textarea 
        label="what to do?"
        :rules="rules"
        hide-details="auto" class="form-text" v-model="formData.text"/>
        <v-autocomplete
          v-model="formData.tagsId"
          :items="tags"
          outlined
          dense
          chips
          deletable-chips
          small-chips
          label="tags"
          multiple
          item-text="name"
          item-value="id"
          class="tags-input"
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
<style scoped>
  .form-text{
    width: 92%;
    margin: auto;
  }
  .tags-input{
    width: 92%;
    margin:10px auto;
  }
</style>