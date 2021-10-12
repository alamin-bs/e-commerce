<template>
  <a-row type="flex" align="center">
    <a-spin :spinning="isLoading" size="large" style="text-align: center" />
  </a-row>
  <a-row v-if="!isLoading" style="background: #ffffff">
    <a-col
      :span="8"
      :offset="4"
      style="
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      "
    >
      <img class="img" alt="example" :src="product?.image" />
    </a-col>
    <a-col :span="8" style="margin-top: 30px">
      <h3>{{ product.title }}</h3>

      <span
        ><a-rate :value="product?.rating?.rate" disabled />{{ "  " }}
        <a>10 review(s) | Add your review</a></span
      >
      <h3 style="color: red; margin-top: 10px">${{ product.price }}</h3>
      <p style="margin-top: 10px">{{ product.description }}</p>

      <a-row
        ><a-col
          ><a-input
            style="padding-top: 10px; padding-bottom: 10px; width: 50px"
            :value="quantity"
        /></a-col>
        <a-col
          ><a-row
            ><PlusSquareFilled
              style="color: green; font-size: 20px"
              @click="quantity += 1"
          /></a-row>
          <a-row
            ><MinusSquareFilled
              style="color: red; font-size: 20px"
              @click="quantity -= 1"
          /></a-row>
        </a-col>
        <a-button
          style="margin-left: 10px"
          type="primary"
          @click="handleAddingCart"
          >Add to Cart</a-button
        >
      </a-row>
      <span
        >Category:
        <router-link :to="`/products/category/${product.category}`">{{
          product.category
        }}</router-link>
      </span>
    </a-col>
    <a-col :offset="4" />
  </a-row>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { PlusSquareFilled, MinusSquareFilled } from "@ant-design/icons-vue";

import { getProductById } from "@/service/productService";
export default defineComponent({
  components: { MinusSquareFilled, PlusSquareFilled },
  setup() {
    const route = useRoute();
    const store = useStore();
    const rate = ref(0);
    const product = ref({});
    const quantity = ref(0);
    const isLoading = ref(false);
    function handleAddingCart() {
      const item = {
        ...product.value,
        quantity: quantity.value,
        subtotal: product.value.price * quantity.value,
      };
      store.commit("addItemToCart", item);
    }
    onMounted(async function () {
      isLoading.value = true;
      const data = await getProductById(route.params["product_id"]);
      isLoading.value = false;
      product.value = data;
    });
    return {
      rate,
      product,
      quantity,
      handleAddingCart,
      isLoading,
    };
  },
});
</script>

<style scoped>
.test {
  border: 1px solid rgb(109, 12, 12);
}
.img {
  display: block;
  margin: auto;
  width: 90%;
  max-height: 80%;
  padding: 30px;
}
li {
  display: inline;
}
/* .ant-spin-dot-item {
  background-color: red !important;
} */
</style>
