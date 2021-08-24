<template>
  <v-card  class="card" elevation="5" outlined @click.self="$emit('click')" :style="[BgColor]" >
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
              <v-radio  class="color-item"  v-for="(bg,index) in bgCards"  :value="bg.colorVal" :key="index" :color="bg.colorVal" :style="{backgroundColor:bg.colorVal}" off-icon></v-radio>
              </v-radio-group>
            <span class="tool-tip"><small>colors</small></span> 
      </li>
      <li class="item-hover">
        <v-icon @click="idToArchiver" id="archive-hover" class="item-hover" small>mdi-package-down</v-icon>
        <span class="tool-tip" >
          <small >Archive</small>
        </span> 
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
      console.log(this.note.id);
    },

    idToArchiver(){
       this.$store.commit('helloWorld/archiver', this.note.id)
      // this.$emit('click')
      console.log(this.note.id);

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
    height: 100px;
    border-radius:4px;
    display: none;
    width: 180px;
    position: absolute;
    top:22%;
    z-index: 2;
  
  }
  .color-item{
    transition: all 1s;
    width: 26px;
    margin: auto;
    padding-right: 5px;
    border-radius: 100%;
    margin-top: 3px;
    height: 15%;
    border: 2px solid rgb(190, 190, 190);
  }
  /* .color-item:nth-child(-n+4){
    margin-top: 6px;
  } */
  .color-item:nth-child(1){
    margin-left: 10px;
  }
  .color-item:nth-child(5){
    margin-left: 10px;
  }
  .color-item:nth-child(9){
    margin-left: 10px;
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
    transition: all 1s;
    display:flex;
  }
  #color-hover:hover .color-container .color-item:hover{
    transition: all 1s;
    border: 2px solid black;
  }
  .item-hover:hover .tool-tip{
    display: flex;
    
  }
   /* end hovers */
</style>

