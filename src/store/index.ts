import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: [],
  },
  mutations: {
    addItemToCart(state, payload) {
      state.cartList.push(payload);
    },
    incrementItemQuantity(state, payload) {
      const copied = [...state.cartList];
      const index = copied.findIndex((item) => item.id === payload.id);
      copied[index].quantity = copied[index].quantity + 1;
      copied[index].subtotal = copied[index].price * copied[index].quantity;
      state.cartList = [...copied];
    },
    decrementItemQuantity(state, payload) {
      const copied = [...state.cartList];
      const index = copied.findIndex((item) => item.id === payload.id);
      copied[index].quantity = copied[index].quantity - 1;
      copied[index].subtotal = copied[index].price * copied[index].quantity;
      state.cartList = [...copied];
    },
    clearCartList(state) {
      state.cartList = [];
    },
    removeItem(state, payload) {
      const index = state.cartList.findIndex((item) => item.id === payload.id);
      state.cartList.splice(index, 1);
    },
  },
});
