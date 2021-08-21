<template>
  <v-card class="card" elevation="2" outlined @click.self="$emit('click')" :style="[BgColor]" >
    <h2> {{note.title}} </h2>
    <br>
    <p> {{  note.text.substr(0,21)+'...'}} </p>
    <div class="container">
        <v-chip v-for="t in note.tagsId" :key="t" class="ma-2" x-small>
          {{ $store.getters['helloWorld/tagLabel'](t) }}
        </v-chip>
    </div>
         
    <v-expansion-panels >
      <v-expansion-panel > 
        <v-expansion-panel-header >
          background-color
        </v-expansion-panel-header>
        <v-expansion-panel-content >
            <v-radio-group v-model="BgColor.background" row  style="display: inline;" >
              <v-radio v-for="(bg,index) in cardBgColors" :label="bg.colorLabel" :value="bg.colorVal" :key="index"></v-radio>
            </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>


  </v-card>
</template>
<script>
  export default {
  props: ['note'],
  data(){
    return{
      BgColor:{background:'transparent',margin:'15px'},
      cardBgColors:[
        {colorLabel:"khaki",colorVal:"khaki"},
        {colorLabel:"purple",colorVal:"#9b5de5"},
        {colorLabel:"pink",colorVal:"#f15bb5"},
        {colorLabel:"yellow",colorVal:"#fee440"},
        {colorLabel:"blue",colorVal:"#00bbf9"},
        {colorLabel:"cyan",colorVal:"#00f5d4"},

      ]
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
      background-color: rgba(32, 178, 171, 0.493);
      transition: all 1s;
      cursor: pointer;
  }
  .container{
    display: flex;
  }
</style>

