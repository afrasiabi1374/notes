<template>
<div>


<form  v-on:submit.prevent="addTodo">
    <label >your plan for this day : </label>
    <input name="toDo" type="text"  v-model="todoTxt">
</form>


<div>
    <p v-for="(item,idx) in todos" :key="idx" type="text" disabled>{{item.title}} <v-icon @click="deleteTodo(idx)">delete</v-icon> </p>
</div>

</div>
</template>
<script>
export default {
    data(){

        return{
 
            todoTxt:"",
            todos:[
                {
                    id:1,
                    title:"you shod do A"
                },
                {
                    id:2,
                    title:"you shod do b"
                },
                {
                    id:3,
                    title:"you shod do c"
                },
                {
                    id:4,
                    title:"you shod do d"
                },
                {
                    id:5,
                    title:"you shod do e"
                },

                
            ],
            nextId : 6
        }

    },
    methods:{

        addTodo(){

            this.todos.push(
                            {
                                id:this.nextId++,
                                title:this.todoTxt
                            }
                              )
                        this.todoTxt = ""
                        console.log(this.todos);
                },

        deleteTodo(i){
            this.todos.splice(i,1)
        }        



    }
}
</script>