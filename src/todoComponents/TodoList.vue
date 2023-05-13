<template>
  <div class="bg-blue-100 rounded max-w-7xl w-96">
    <ul
      v-for="todoItem in proviceData.todoList"
      :key="todoItem.id"
      class="flex justify-between items-center"
    >
      <li class="bg-red-100 rounded p-1 m-1">
        {{ todoItem.text }}
      </li>
      <button
        @click="deleteItem(todoItem.id)"
        class="bg-red-400 rounded p-1 m-1"
      >
        delete
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  inject: ["proviceData","deleteItem"],
};
</script>