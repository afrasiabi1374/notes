<template>
  
      <v-btn @click="count++">{{ (message) ? count + message + name :count }}</v-btn>
  
</template>

<script>
export default {
  props:['message','name'],
    data(){
      return{
        count:0
      }
    }
}
</script>

<style>

</style>