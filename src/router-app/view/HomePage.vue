<template>
  <div>
    <table class="bg-slate-50 w-96">
      <thead>
        <tr>
          <th>Başlık</th>
          <th>Type</th>
          <th>Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getAllProducts" :key="product.id">
          <td class="p-1 pl-2 pr-2 bg-slate-200 w-96 rounded m-1">
            {{ product.title }}
          </td>
          <td class="p-1 pl-2 pr-2 bg-slate-300 w-96 rounded m-1">
            {{ product.type }}
          </td>
          <td>
            <button  @click="deleteProduct(product.id)" class="bg-red-300 p-1 rounded m-1">sil</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center">
      <button class="bg-blue-200 p-1 rounded m-1" @click="navigateToRoute">
        +Yeni Ekle
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    navigateToRoute() {
      this.$router.push({ name: "Bookmark" });
    },
    deleteProduct(id) {
      // console.log(id);
      this.$store.commit("deleteProduct", id);
    },
  },
  computed: {
    ...mapGetters(["getAllProducts"]),
  },
};
</script>