import Vue from "vue";
import Vuex from "vuex";
import { Product } from "@/interfaces/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    products: Array<Product>(),
  }),
  mutations: {
    ADD_PRODUCT(state, product: Product): void {
      state.products.push(product);
    },
    DELETE_PRODUCT(state, products: Array<string>): void {
      state.products = state.products.filter((el) => !products.includes(el.id));
    },
  },
  actions: {
    addProduct({ commit }, product: Product): void {
      const sum: number = Number(product?.price) * Number(product?.qty);

      const enhancedProduct: Product = {
        ...product,
        sum,
      };

      commit("ADD_PRODUCT", enhancedProduct);
    },

    deleteProducts({ commit }, products: Array<string>) {
      commit("DELETE_PRODUCT", products);
    },
  },
  modules: {},
});
