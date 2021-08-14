<template>
    <div>
        <h1>component testing</h1>
        <test-ali v-model="data"/>
        {{ age }}
    </div>
</template>
<script>
import TestAli from '~/components/TestAli'
export default {
    components:{TestAli},
    data(){
        return {
            ali: 'dash ali',
            data: {
                name: 'nima',
                age: 33,
                
            }
        }
    },
    methods:{
        log(val){
            this.age = val
            // console.log(val);
        }
    }
}
</script>