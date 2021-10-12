<template>
  <div>
    <a-row type="flex" align="center">
      <a-spin :spinning="isLoading" size="large" style="text-align: center" />
    </a-row>
    <a-row type="flex">
      <a-col
        v-for="(product, index) in productList"
        :key="index"
        :span="6"
        :order="index"
      >
        <product :product="product" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { getProductsByCategory } from "@/service/productService";
import Product from "@/components/Product.vue";
export default defineComponent({
  components: {
    Product,
  },
  setup() {
    const router = useRoute();
    const productList = ref([]);
    const isLoading = ref(false);

    async function getProducts(params) {
      try {
        isLoading.value = true;
        const data = await getProductsByCategory(params);
        productList.value = data;
        isLoading.value = false;
      } catch (error) {
        console.log("error ", error);
        isLoading.value = false;
      }
    }
    watch(router, async function () {
      await getProducts(router.params["category"]);
    });
    onMounted(async () => {
      await getProducts(router.params["category"]);
    });
    return {
      productList,
      isLoading,
    };
  },
});
</script>
<style scoped>
.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
.test {
  border: solid 1px red;
}
</style>
