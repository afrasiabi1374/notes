<template>
    <div>
        <div id="components-demo" :style="{fontSize: postFontSize+'px'}">
            <blog-posts v-for="(post,i) in posts" :key="i"
            v-bind:post="post"
            v-bind:fontSize="postFontSize"   v-on:bozorg-kon="pluser($event)">
            </blog-posts>
        </div>
    </div>
</template>
<script>
import BlogPosts from '~/components/BlogPosts';
import ButtonCounter from '~/components/ButtonCounter';
export default {

    components:['BlogPosts'],
    data(){
        return{
           posts :[
               {id:1,title:"euro news",content:"Lorem <marquee> ipsum dolor sit amet</marquee>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",createAt:'6th FEB 1996',comment:'very goood hand writing'},
               {id:1,title:"euro news",content:"Lorem <marquee> ipsum dolor sit amet</marquee>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",createAt:'6th FEB 1996',comment:'very goood hand writing'},
               {id:1,title:"euro news",content:"Lorem <marquee> ipsum dolor sit amet</marquee>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",createAt:'6th FEB 1996',comment:'very goood hand writing'},
           ],
               postFontSize:14
        }
    },
    methods:{


        pluser(param){
                this.postFontSize +=param;
        }


    }
}
</script>