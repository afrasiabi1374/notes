<!-- <v-btn color="teal" dark @click.stop="drawer = !drawer" :class="$vuetify.breakpoint.mdAndUp ?'nav-sandwich-btn-hide':''"> menu </v-btn> -->
<template>
    <div  class="nav-bar" >
      <div style="display:flex">
        <v-app-bar-nav-icon  @click="drawer = !drawer"  color="primary" ></v-app-bar-nav-icon>
      </div>
      <v-navigation-drawer
        hide-overlay 
        v-model="drawer"
        expand-on-hover
        class="sandwich"
        append
        light
        mini-variant>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            
          >
            <v-list-item  >
              <v-list-item-title>
                <nuxt-link to="/" class="app-bar-link-item" ><v-icon color="blue">mdi-home</v-icon></nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(tagItem,index) in menuTags" :key="index" >
              <v-list-item-title>
                <v-icon>mdi-tag-outline</v-icon>
                <nuxt-link :to="'/tags/' + `${tagItem.id}`" class="app-bar-link-item"  >{{tagItem.name}} </nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
  export default {
    data(){

      return{
          drawer: true,
          group: null,
          menuTags:this.$store.state.helloWorld.tags,
          width:'none'
      }
    },

  
  }
</script>
<style>
  .app-bar-link-item{
    text-decoration: none;
    color: black;

  }

</style>