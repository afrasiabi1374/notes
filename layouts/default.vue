<template>
  <v-app>
    <div class="index-container">
      <todo-nav></todo-nav>
      <nuxt/>
    </div>   
  </v-app>
</template>
<script>
import TodoNav from '~/components/todoNotes/nav/TodoNav'
export default {
  components: { TodoNav },
    data() {
      return{

      }
    },
}
</script>
<style>
  .index-container{
    display: flex;
  }
</style>