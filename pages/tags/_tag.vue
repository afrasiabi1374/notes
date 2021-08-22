<template>
  <div> 
    <div v-for="(item,index) in notesOfTag" :key="index">
        <h1>{{item.title}}</h1>
        <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {

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