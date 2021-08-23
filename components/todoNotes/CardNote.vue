<template>
  <v-card  class="card" elevation="2" outlined @click.self="$emit('click')" :style="[BgColor]" >
    <h2> {{note.title}} </h2>
    <br>
    <p> {{  note.text.substr(0,21)+'...'}} </p>
    <div class="container">
        <v-chip v-for="t in note.tagsId" :key="t" class="ma-2" x-small>
          {{ $store.getters['helloWorld/tagLabel'](t) }}
        </v-chip>
    </div>
    <ul class="card-buttom-nav">
      <li id="color-hover" class="item-hover">
        <v-icon small>mdi-palette</v-icon>
              <v-radio-group class="color-container" v-model="BgColor.background" row   >
              <v-radio  small  class="color-item"  v-for="(bg,index) in bgCards"  :value="bg.colorVal" :key="index" :color="bg.colorVal" :style="{backgroundColor:bg.colorVal}" off-icon></v-radio>
              </v-radio-group>
            <span class="tool-tip"><small>colors</small></span> 
      </li>
      <li class="item-hover">
        <v-icon id="archive-hover" class="item-hover" small>mdi-package-down</v-icon>
        <span class="tool-tip"><small>Archive</small></span> 
      </li>
    </ul>

  </v-card>
</template>
<script>
  export default {
  props: ['note'],
  data(){
    return{
      BgColor:{background:'transparent',margin:'15px'},
      bgCards:this.$store.state.helloWorld.colors,
    }
  },
  methods:{

    logger(){
      console.log(this.bgCards);
    }

  }
  }
</script>
<style >
  .card{
 
      padding: 30px;
      margin-bottom: 10px;
      transition: all 1s;
  }
  .card:hover{
      background-color: rgba(62, 178, 171, 0.493);
      transition: all 1s;
      cursor: pointer;
  }
  .container{
    display: flex;
  }
  .item-hover{
    margin-left: 11%;
  }
  .card-buttom-nav{
    display: flex;
    list-style-type: none;
  }
  .color-hover{
    position: relative;
  }
  
  .color-container{
    background-color: aliceblue;
    border-radius:4px;
    display: none;
    width: 40%;
    position: absolute;
    top: 20%;
    z-index: 2;
  }
  .color-item{
    width: 20%;
    display: flex;
    padding-right: 22px;
    border-radius: 100%;
    margin: auto;
  }
  .tool-tip{
    display: none;
    position: absolute;
    bottom: 0;
    background-color: #5f6061;
    color: white;
    padding: 3px 15px;
    border-radius: 5px;
    transition-delay: 1s;
  }
  /* hovers */
  #color-hover:hover .color-container{
  display: flex;
  }
  .item-hover:hover .tool-tip{
    display: flex;
  }
   /* end hovers */
</style>

