import { createStore } from "vuex";
const store = createStore({
  state: {
    person: {
      name: "emin",
      lname: "oz",
      password: "11234432",
    },
    users: ["emin", "mehmet", "ramazan", "fatma"],
    itemList: [
      { id: 1, title: "raf", type: "mobilya" },
      { id: 2, title: "raf", type: "mobilya" },
      { id: 3, title: "bardak", type: "plastik" },
      { id: 4, title: "catal", type: "mutfak" },
      { id: 5, title: "ayna", type: "banyo" },
    ],
  },
  getters: {
    wooden: (state) => state.itemList.filter((e) => e.type === "mobilya"),
    activeuser(state) {
      const user = { ...state.person };
      delete user.password;
      return user;
    },
  },
  actions: {
    newItem(ctx, item) {
      ctx.dispatch("newItems", item); // bu dispacth actions içinde olan asenkron fonksiyonları çağırmak için
      setTimeout(() => {
        ctx.commit("newItems", item); // bu commit mutations  içinde olan senkron fonksiyonları çağırmak için
      }, 2000);
    },
  },
  mutations: {
    newItems(state, payload) {
      state.itemList.push(payload);
    },
  },
});
export default store;
