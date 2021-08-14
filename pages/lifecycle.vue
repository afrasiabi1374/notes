<template>
    <div>
        <h1>life cycle introduction</h1>
        <v-btn to="/">goto home</v-btn>
        <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark">goto home</v-btn>
        <div>
            {{ lifeCycle }}
        </div>
        <div>
            {{ testComputed }}
            <br>
            {{testComputedTwo()}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lifeCycle: 'this our first life cycle intro',
        }
    },

    // life cycle
    beforeCreate(){
        console.log('before create');
        console.log(this.lifeCycle);
    },
    created(){
        console.log('after create or creeted');
        console.log(this.lifeCycle);
    },
    beforeMount(){
        console.log('before mount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeDestroy(){
        console.log('before destroy');
    },
    destroyed(){
        console.log('destroyed');
    },

    

    updated(){
        console.log('updated');
    },


    // other stuff

    methods:{
        testComputedTwo(){
            return 'this our first life cycle intro2'
        }
    },
    computed:{
        testComputed(){
            return 'this our first life cycle intro'
        }
    }
    
}
</script>