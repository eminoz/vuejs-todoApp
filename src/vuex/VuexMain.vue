<template>
  <div>
    <div class="flex-row flex justify-center">
      <input
        type="text"
        placeholder="input name"
        v-model="todoText"
        @keydown.enter="change(todoText)"
      />
    </div>
    <ul
      class="flex-row flex justify-center"
      v-for="items in wooden"
      :key="items.id"
    >
      <li class="flex justify-center bg-red-100 m-1 rounded p-1">
        {{ items.title }}
      </li>
      <li class="flex justify-center bg-red-100 m-1 rounded p-1">
        {{ items.type }}
      </li>
    </ul>
    <!-- <ul class="flex justify-center">
      <button class="bg-blue-100 rounded p-1" @click="change">değişir</button>
    </ul> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    change(name) {
      const newitem = {
        id: new Date().getTime(),
        title: name,
        type: "mobilya",
      };

      this.$store.commit("newItems", newitem); //this one is sencron
      this.$store.dispatch("newItem", newitem); //this one is asencron
    },
  },
  computed: {
    ...mapGetters(["wooden", "activeuser"]),
  },
  created() {},
};
</script>