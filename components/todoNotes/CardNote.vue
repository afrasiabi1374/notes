<template>
  <v-card  class="card" @mouseover="cardElevationPluser()" @mouseleave="noCardElevation()" :elevation="cardElevation" outlined @click="$emit('click')" :style="[BgColor]" >
    <div class="card-content">
    <h2> {{note.title}} </h2>
    <br>
    <p> {{  note.text.substr(0,21)+'...'}} </p>
    <div  class=" chip-container">
      <v-chip v-for="t in note.tagsId" :key="t" class="ma-2" x-small>
        {{ $store.getters['helloWorld/tagLabel'](t) }}
      </v-chip>
    </div>
    <ul class="card-buttom-nav">
      <li id="color-hover" class="item-hover">
        <v-icon small>mdi-palette</v-icon>
          <v-radio-group class="color-container" v-model="BgColor.background" row>
            <v-radio    class="color-item"  v-for="(bg,index) in bgCards"  :value="bg.colorVal" :key="index" :color="bg.colorVal" :style="{backgroundColor:bg.colorVal}" off-icon  >
              <template slot="label">
                <span  class="tool-tip-color-name"><small>{{bg.colorLabel}}</small></span> 
              </template>
             </v-radio>
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
  </div>
  </v-card>
</template>
<script>
  export default {
  props: ['note'],
  data(){
    return{
      BgColor:{background:'transparent'},
      bgCards:this.$store.state.helloWorld.colors,
      cardElevation:0,
      fakeVar:false
    }
  },
computed:{
  returnNotes:{
    get(){
      return 3
    },
    set(val){
      return val
    }
  }
}
  ,
  methods:{
    logger(){
      console.log(this.note.id);
    },
    cardElevationPluser(){
      this.cardElevation = 2;
    },
    noCardElevation(){
      this.cardElevation = 0;
    },
    idToArchiver(){
      this.$store.commit('helloWorld/archiver', this.note.id)
      //this.$emit('click')
      console.log(this.note.id);
      console.log(this.$store.getters['helloWorld/showUnarchived']);
    },
  }
  }
</script>
<style >
  .card{
    text-align: left;
    padding: 25px 5px;
    transition: all 1s;
  }
  .card-content{
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  .item-hover{
    margin-left:10px;
  }
  .card-buttom-nav{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    visibility: hidden;
    opacity: 0;
    transition: all .5s;
  }
  .color-hover{
    position: relative;
  }
  .color-container{
    background-color: aliceblue;
    height: 100px;
    border-radius:4px;
    display:flex;
    width: 180px;
    position: absolute;
    z-index: 3;
    visibility: hidden;
    bottom: 50px;
  }
  .color-item{
    transition: all .3s;
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
    margin-top: 10px;
    background-color: #5f6061;
    color: white;
    padding: 3px 15px;
    border-radius: 5px;
    transition-delay: 1s;
   
  }
   .tool-tip-color-name{
    position: absolute;
    opacity: 0;
    background-color: #5f6061;
    padding: 3px 15px;
    color: white;
    border-radius: 5px; 
    position: absolute;
    

  }
  /* hovers */
  .color-item:hover .tool-tip-color-name{
    opacity: 1;
    z-index: 2;
  }
  .card:hover{
      cursor: pointer;
  }
  .card:hover .card-buttom-nav{
    transition: all .5s;
    opacity: 1;
    visibility: visible;
  }
  #color-hover:hover .color-container{
    transition: all 1s;
    visibility:visible
  }
  #color-hover:hover .color-container .color-item:hover{
    transition: all .3s;
    border: 2px solid black;
  }
  .item-hover:hover .tool-tip{
    display: flex;
    
  } 
/* end hovers */
</style>

