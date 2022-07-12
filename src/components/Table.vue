<template>
  <div class="invoice-table">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="productsData"
      item-key="id"
      hide-default-footer
      show-select
      class="elevation-1"
    />
    <div class="invoice-table-footer">
      <v-btn @click="deleteSelected"> Delete </v-btn>
      <div>Total: {{ totalSum }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Product, Header } from "@/interfaces/types";

@Component
export default class Table extends Vue {
  @Prop() readonly productsData!: Array<Product>;

  selected: Array<Product> = [];
  headers: Array<Header> = [
    {
      text: "Product name",
      align: "start",
      value: "name",
    },
    { text: "Price", value: "price" },
    { text: "Qty", value: "qty" },
    { text: "Sum", value: "sum" },
  ];

  get totalSum(): number {
    return this.productsData?.reduce(
      (acc: number, el: Product) => (acc += el.sum),
      0
    );
  }
  get selectedIds(): Array<string> {
    return this.selected.map((el: Product) => el.id);
  }
  @Emit("delete-products")
  public deleteSelected(): Array<string> {
    return this.selectedIds;
  }
}
</script>

<style lang="scss" scoped>
.invoice-table {
  display: grid;
  grid-gap: 24px;
  grid-template: minmax(200px, auto) auto / auto;

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
