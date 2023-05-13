<template>
        <label for="todoText"></label>

<input
  class="bg-slate-300 p-1 m-1 rounded"
  type="text"
  id="todoText"
  placeholder="enter todo"
  v-model="todoText"
  @keydown.enter="addNewTodo(todoText)"
/>
</template>

<script>
export default {
    props:{
        addNewTodo:{
            type:Function,
            required:true
        }
    },
    data(){
        return{
            todoText:null
        }
    },
 
}
</script>