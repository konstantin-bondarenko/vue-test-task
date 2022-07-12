<template>
  <form class="form" @submit.prevent="onSubmit">
    <v-text-field
      v-model="name"
      name="name"
      outlined
      dense
      :error-messages="nameErrors"
      placeholder="Product name"
      @blur="$v.name.$touch"
    />
    <v-text-field
      v-model="price"
      name="price"
      outlined
      dense
      style="max-width: 200px"
      :error-messages="priceErrors"
      placeholder="Price"
      @blur="$v.price.$touch"
    />
    <v-text-field
      v-model="qty"
      name="qty"
      outlined
      dense
      style="max-width: 200px"
      :error-messages="qtyErrors"
      placeholder="Qty"
      @blur="$v.qty.$touch"
    />
    <v-btn type="submit"> Add </v-btn>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { required, minLength, numeric } from "vuelidate/lib/validators";
import { Product } from "@/interfaces/types";

@Component({
  name: "Form",
  validations: {
    name: { required, minLength: minLength(2) },
    price: { required, numeric },
    qty: { required, numeric },
  },
})
export default class Form extends Vue {
  name = "";
  price = "";
  qty = "";

  get nameErrors(): Array<string> {
    const errors: Array<string> = [];
    if (!this.$v.name.$dirty) return errors;
    !this.$v.name.required && errors.push("Name is required");
    !this.$v.name.minLength && errors.push("Minimal length is 2");
    return errors;
  }
  get priceErrors(): Array<string> {
    const errors: Array<string> = [];
    if (!this.$v.price.$dirty) return errors;
    !this.$v.price.required && errors.push("Price is required");
    !this.$v.price.numeric && errors.push("Should be positive number");
    return errors;
  }
  get qtyErrors(): Array<string> {
    const errors: Array<string> = [];
    if (!this.$v.qty.$dirty) return errors;
    !this.$v.qty.required && errors.push("Quantity is required");
    !this.$v.qty.numeric && errors.push("Should be positive number");
    return errors;
  }
  get productData(): Product {
    return {
      id: JSON.stringify(new Date()),
      name: this.name,
      price: this.price,
      qty: this.qty,
      sum: 0,
    };
  }

  private resetLocals(): void {
    this.$v.$reset();
    this.name = "";
    this.price = "";
    this.qty = "";
  }

  public onSubmit(): void {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.addProduct();
      this.resetLocals();
    }
  }

  @Emit()
  private addProduct(): Product {
    return this.productData || {};
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 16px;
}
</style>
