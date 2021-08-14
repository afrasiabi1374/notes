<template>
<div>
    <h1> {{post.title}} </h1>
    <p v-html="post.content" > </p>
      <h3>create at : {{post.createAt}} </h3>
      <h3>comment's:</h3>
    <p :style="{fontSize:fontSize+'px'}"> {{post.comment}} </p>
    <v-btn @click="$emit('bozorg-kon',1)" color="success">Enlarge text</v-btn>
</div>
</template>

<script>

export default {
      props:['post','enlarge-text'],
            data(){
              return{}
            }
              ,
            methods:{
              }
          }
</script>

