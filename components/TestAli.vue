<template>
    <div class="red">
        <h1>component</h1>
        <p>bia berim esh konim {{ value }}</p>
        <!-- <v-btn @click="changeAge">click</v-btn> -->
        <v-btn @click="changeAge">click</v-btn>
        <!-- <br>
        <input style="background-color:yellow" v-model="name">
        <br> -->
        <h1>variable:{{ value }}</h1> 
        <br>
        <!-- <input style="background-color:gray" type="text" @input="myModel" :value="name"> -->
    </div> 
</template>
<script>
export default {
    props:['value'],
    // props: ['age'],
    data(){
        return {
            name: 'ali'
        }
    },
    methods:{
        // changeAge(){
        //     this.$emit('input', 48)
        // },
        changeAge(){
            this.$emit('input', {...this.value, 'name': 'nazi'})
        },

        myModel(e){
            this.name = e.target.value;
        }
    }
}
</script>