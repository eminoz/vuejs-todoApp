<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="bg-slate-400 w-96 flex flex-col rounded items-center justify-center m-2 mb-4 pb-4"
    >
      <h2 class="w-44 text-center p-1 rounded m-2">Todo App</h2>
      <AddSection @add-todo="addTodo" />
    </div>
    <TodoList :todos="todoList" @delete-todo="deleteItem" />
  </div>
</template>

<script>
import AddSection from "@/todoComponents/AddSection.vue";
import TodoList from "@/todoComponents/TodoList.vue";

export default {
  components: {
    AddSection,
    TodoList,
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      this.todoList = this.todoList.filter((e) => e.id != id);
    },
    addTodo(todo) {
      if (todo == null) {
        return;
      }
      this.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
      event.target.value = "";
    },
  },
};
</script>