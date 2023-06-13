import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
  },

  getters: {
    getAllProducts: (state) => state.products,
  },
  actions: {
    async createProduct(_, product) {
      const res = await axios.post("http://localhost:8081/create", product);
    },
    async onMountedApp(ctx, _) {
      let res = await axios.get("http://localhost:8081/getall");
      ctx.commit("setStateAppFirstMounted", res.data);
    },
    async deleteProduct(ctx, payload) {
      console.log(payload);
      let res = await axios.delete(`http://localhost:8081/delete/${payload}`)

      if (res.status==200) {
        ctx.commit("deleteProduct",payload );
      }
    },
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    setStateAppFirstMounted(state, payload) {
      state.products = payload;

    },
    deleteProduct(state, payload) {
      console.log(payload);
      state.products = state.products.filter((e) => e.ID !== payload);
    },
  },
});
export default store;
