<template>
  <div class="invoice-card">
    <h1>Vue Invoice Calc</h1>
    <Form @add-product="addProduct" />
    <Table :products-data="products" @delete-products="deleteProducts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "InvoiceCalc",
  components: {
    Form,
    Table,
  },
  created() {
    this.initProducts();
  },
  computed: {
    ...mapState("products", ["products"]),
  },
  methods: {
    ...mapActions("products", ["addProduct", "deleteProducts", "initProducts"]),
  },
});
</script>

<style lang="scss" scoped>
.invoice-card {
  max-width: 80vw;
  margin: 24px auto;
  border: 2px solid #000;
  padding: 16px;
  display: grid;
  grid-gap: 24px;

  h1 {
    text-align: start;
  }
}
</style>
