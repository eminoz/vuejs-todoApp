<template>
  <div class="flex flex-col items-center justify-center m-1 max-w-7xl">
    <h3 class="bg-purple-100 w-96 justify-center flex">Alışveriş listesi</h3>
    <hr />
    <div>
      <input
        @keydown.enter="onSave"
        class="w-96"
        type="text"
        placeholder="ne alacaksın"
      />
    </div>
    <ul class="w-96">
      <li
        v-for="item in itemList"
        :key="item"
        class="flex items-center justify-between"
      >
        <span> {{ item.title }}</span>
        <button @click="deleteItem(item)" class="bg-red-200">sil</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { itemList: [] };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((res) => {
      this.itemList = res.data || [];
    });
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        createAt: new Date(),
        complated: false,
      };
      axios.post("http://localhost:3000/items", saveObject).then((res) => {
        this.itemList.push(res.data);
        e.target.value=""
      });
    },
    deleteItem(e) {
      console.log(e);
      axios.delete(`http://localhost:3000/items/${e.id}`);
      this.itemList = this.itemList.filter((es) => es.id != e.id);
    },
  },
};
</script>