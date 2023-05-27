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
    async createProduct(_,product){

      const res=await axios.post("http://localhost:8081/create",product)
      const byid=await axios.get(`http://localhost:8081/get/${product.id}`,)
      console.log(byid.data);
    }
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
      
    },
    deleteProduct(state, payload) {
      console.log(payload);
      state.products = state.products.filter((e) => e.id !== payload);
    },
  },
});
export default store;
