import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { Product } from "@/interfaces/types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.ADD_PRODUCT](state: S, payload: Product): void;
  [MutationTypes.DELETE_PRODUCT](state: S, payload: Array<string>): void;
  [MutationTypes.INIT_PRODUCTS](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD_PRODUCT](state, payload: Product) {
    state.products.push(payload);
    localStorage.setItem("products", JSON.stringify(state.products));
  },
  [MutationTypes.DELETE_PRODUCT](state, payload: Array<string>) {
    state.products = state.products.filter((el) => !payload.includes(el.id));
    localStorage.setItem("products", JSON.stringify(state.products));
  },
  [MutationTypes.INIT_PRODUCTS](state) {
    if (localStorage.getItem("products")) {
      state.products = JSON.parse(localStorage.getItem("products") || "");
    }
  },
};
