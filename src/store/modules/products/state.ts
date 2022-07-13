import { Product } from "@/interfaces/types";

export const state = {
  products: Array<Product>(),
};

export type State = typeof state;
