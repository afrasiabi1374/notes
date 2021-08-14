<template>
<div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">add a todo :  </label>
        <input v-model="newTodoText" id="new-todo"   placeholder="write what must you do?at thid day"/>
        <button type="submit">Add</button>
    </form>
    <ul>
        <li
            v-for="(todo, i) in todos" 
            :key="todo.id"
            :title="todo.title"
            @click="remove(i)"
            >{{ todo }}</li>
    </ul>
</div>
</template>


<script>
import "./a.css";
export default {
    data(){
        return {
            newTodoText : '',
            todos:[
                {
                    id:1,
                    title:'take out the a'
                },
                {
                    id:2,
                    title:'take out the a-1'
                },
                {
                    id:3,
                    title:'take out the a-2'
                },
                {
                    id:4,
                    title:'take out the a-3'
                },
            ],
            nextToDoId: 5
        }
    },
    methods:{

        addNewTodo(){
            
            this.todos.push({
                id: this.nextToDoId ++,
                title:this.newTodoText
            })
            this.newTodoText = ''
        },
        remove(index){
            this.todos.splice(index, 1)
            console.log(index);
        }

    }










,
    computed:{

    }

}

</script>