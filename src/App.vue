<template>
  <div>
    <nav-bar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import { getProducts } from "./service/productService";
import Footer from "@/views/Footer.vue";
export default defineComponent({
  components: { NavBar, Footer },
  data() {
    return {
      current: ["mail"],
      appstore: "appstore",
      MensClothing: "Men's clothing",
      WomensClothing: "Women's clothing",
      jewelery: "Jewelery",
      electronics: "Electronics",
    };
  },
  async mounted() {
    const products = await getProducts();
    console.log("product in mounted : ", products);
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
.body {
  background-color: orangered;
} */
.ant-divider-horizontal.ant-divider-with-text {
  border-top-color: #ffff !important;
}
</style>
