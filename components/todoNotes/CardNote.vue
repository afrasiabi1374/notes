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
              <v-radio  v-for="(bg,index) in bgCards"  :value="bg.colorVal" :key="index" :color="bg.colorVal" :style="{backgroundColor:bg.colorVal,borderRadius:100+'%'}"></v-radio>
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
      background-color: rgba(32, 178, 171, 0.493);
      transition: all 1s;
      cursor: pointer;
  }
  .container{
    display: flex;
  }
</style>

