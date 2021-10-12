<template>
  <Suspense>
    <template #default>
      <div class="home">
        <a-row type="flex" :style="{ marginTop: '10px', marginLeft: '10px' }">
          <a-col
            span="6"
            v-for="(category, index) in categoryList"
            :key="index"
            :order="index"
            ><category
              :imageSrc="category.image"
              :title="category.name.toUpperCase()"
              @click="handleSelectCategory(category.name)"
          /></a-col>
        </a-row>
        <a-divider orientation="left" style="color: #ffffff">
          New Products
        </a-divider>
        <a-row type="flex" align="center">
          <a-spin
            :spinning="isLoading"
            size="large"
            style="text-align: center"
          />
        </a-row>
        <div>
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
      </div>
    </template>
    <template #fallback> Loading...</template>
  </Suspense>
</template>

<script lang="ts">
//vue
import { defineComponent, onMounted, ref } from "vue";

//components
import Category from "@/components/Category.vue";
import Product from "@/components/Product.vue";

//service
import { getProducts } from "@/service/productService";

import Products from "@/interface/product";
import router from "@/router";
export default defineComponent({
  name: "Home",
  components: { Product, Category },
  data() {
    return {
      current: ["mail"],
      appstore: "appstore",

      categoryList: [
        {
          name: "men's clothing",
          image: `https://media.istockphoto.com/photos/brutal-man-travel-kit-picture-id812130300?k=20&m=812130300&s=612x612&w=0&h=Jow3NMBSMiQ68hHgKhkWGV3oSccq72NLbLuRm1kqmMs=`,
        },
        {
          name: "women's clothing",
          image: `https://media.istockphoto.com/photos/cowgirl-outfit-overhead-of-trendy-casual-woman-clothes-picture-id658119404?k=20&m=658119404&s=612x612&w=0&h=8q3p4AsB9ReVz4D93EroskcyXyk2NBnopOGsuzy7PZo=`,
        },
        {
          name: "jewelery",
          image: `https://media.istockphoto.com/photos/jewelry-picture-id118199633?k=20&m=118199633&s=612x612&w=0&h=ZjsXVIYPmLaOB5Df3thVSYcriqrp2KFRIJ8Erfu2fAY=`,
        },
        {
          name: "electronics",
          image: `https://media.istockphoto.com/photos/car-chip-tuning-picture-id1206919144?k=20&m=1206919144&s=612x612&w=0&h=eC-O_lP5lDyHBIgXEBNXyuITAYNWeqSlmE9VPHUtrOo=`,
        },
      ],
    };
  },
  setup() {
    const productList = ref<Products[]>([]);
    const isLoading = ref<boolean>(false);
    onMounted(async () => {
      try {
        isLoading.value = true;
        const data = await getProducts();
        console.log("data ", data);
        isLoading.value = false;
        productList.value = data;
      } catch (error) {
        isLoading.value = false;
        console.log("error ", error.message);
      }
    });
    function handleSelectCategory(category: string) {
      router.push({ path: `/products/category/${category}` });
      //alert(category);
    }
    return {
      productList,
      handleSelectCategory,
      isLoading,
    };
  },
});
</script>
