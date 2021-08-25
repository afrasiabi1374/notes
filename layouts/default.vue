<template>
  <v-app>
    <tool-bar></tool-bar>
    <div class="index-container">
      <todo-nav></todo-nav>
      <nuxt/>

    </div>   
  </v-app>
</template>
<script>
import TodoNav from '~/components/todoNotes/nav/TodoNav'
import ToolBar from '~/components/todoNotes/ToolBar'
export default {
  components: { TodoNav,ToolBar },
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