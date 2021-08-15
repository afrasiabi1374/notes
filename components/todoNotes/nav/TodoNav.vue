<template>
<nav>
  <ul class="nav-list">
    <li class="nav-item" :class="$vuetify.breakpoint.mdAndDown ?'nav-hidden':''">first</li>
    <li class="nav-item" :class="$vuetify.breakpoint.mdAndDown ?'nav-hidden':''">second</li>
    <li class="nav-item" :class="$vuetify.breakpoint.mdAndDown ?'nav-hidden':''">third</li>
    <li class="nav-item" :class="$vuetify.breakpoint.mdAndDown ?'nav-hidden':''">forth</li>
  </ul>
  <v-btn color="teal" dark @click.stop="drawer = !drawer" :class="$vuetify.breakpoint.mdAndUp ?'nav-sandwich-btn-hide':''"> menu </v-btn>
  <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >


    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>

</nav>
</template>
<script>
export default {
  data() {
    return{

        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],


    }
  },
}
</script>

<style>
.nav-list{
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: teal;
  padding:0;
}
.nav-item{
padding: 19px;
  color: white;
  height: 100%;
transition: all .5s;
  
}
.nav-item:hover{
  background-color: lightseagreen;
  cursor: pointer;
  color: white;
  transition: all .5s;

}
.nav-hidden{

display: none;

}
.nav-sandwich-btn-hide{
  display: none;
}

</style>