<!-- <v-btn color="teal" dark @click.stop="drawer = !drawer" :class="$vuetify.breakpoint.mdAndUp ?'nav-sandwich-btn-hide':''"> menu </v-btn> -->
<template>
<div width="25%" >

      <v-app-bar-nav-icon @click="drawer = !drawer" color="primary" ></v-app-bar-nav-icon>
 <v-navigation-drawer hide-overlay 
      v-model="drawer"
      relative
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(tagItem,index) in menuTags" :key="index" >
            <v-list-item-title># {{tagItem.name}} </v-list-item-title>
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
            menuTags:this.$store.state.helloWorld.tags
      }


    }

  
  }
</script>