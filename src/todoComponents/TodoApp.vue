<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="bg-slate-400 w-96 flex flex-col rounded items-center justify-center m-2 mb-4 pb-4"
    >
      <h2 class="w-44 text-center p-1 rounded m-2">Todo App</h2>
      <!-- <AddSection @add-todo="addTodo" /> -->
      <AddSection :addNewTodo="addNewTodo" />
    </div>
    <TodoList />
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
      proviceData: {
        todoList: [{ id: 1, text: "deneme" }],
      },
    };
  },
  provide() {
    return {
      proviceData: this.proviceData,
      deleteItem: this.deleteItem,
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      this.proviceData.todoList = this.proviceData.todoList.filter(
        (e) => e.id != id
      );
      console.log(this.proviceData);
    },
    addNewTodo(todo) {
      if (todo == null) {
        return;
      }
      this.proviceData.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
    },
  },
};
</script>