<template>
        <label for="todoText"></label>

<input
  class="bg-slate-300 p-1 m-1 rounded"
  type="text"
  id="todoText"
  placeholder="enter todo"
  v-model="todoText"
  @keydown.enter="addNewTodo"
/>
</template>

<script>
export default {
    data(){
        return{
            todoText:null
        }
    },
    methods:{
        addNewTodo(){
            this.$emit("add-todo",this.todoText)// this emit send data to parent component
            this.todoText=null
        }
    }
}
</script>