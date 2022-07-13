import { ActionTree } from "vuex";
import { State } from "./state";
import { MutationTypes } from "./mutation-types";
import { Product } from "@/interfaces/types";

export const actions: ActionTree<State, State> = {
  addProduct({ commit }, payload: Product) {
    const sum: number = Number(payload?.price) * Number(payload?.qty);

    const enhancedProduct: Product = {
      ...payload,
      sum,
    };

    commit(MutationTypes.ADD_PRODUCT, enhancedProduct);
  },
  deleteProducts({ commit }, products: Array<string>) {
    commit(MutationTypes.DELETE_PRODUCT, products);
  },
  initProducts({ commit }) {
    commit(MutationTypes.INIT_PRODUCTS);
  },
};
