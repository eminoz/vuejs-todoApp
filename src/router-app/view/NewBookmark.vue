<template>
  <div class="bg-slate-50 flex justify-center flex-col p-2 w-96">
    <div class="flex flex-col">
      <label class="text-lg" for="title">Başlık</label>
      <input
        id="title"
        type="text"
        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="başlık"
        v-model="title"
      />
    </div>
    <div class="flex flex-col">
      <label class="text-lg" key="type">Type</label>
      <input
        id="type"
        type="text"
        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="type"
        placeholder="type"
      />
    </div>
    <button @click="goHome" class="bg-red-200 p-1 m-1">iptal</button>
    <button @click="createProduct(title, type)" class="bg-blue-200 p-1 m-1">
      ekle
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      type: null,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "HomePage" });
    },
    createProduct(title, type) {
      const newitem = {
        id: new Date().getTime(),
        title,
        type,
      };
  
      this.$store.commit("addProduct", newitem);
      this.$store.dispatch("createProduct", newitem);
      
    },
  },
};
</script>