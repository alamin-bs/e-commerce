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
import Footer from "@/views/Footer.vue";
export default defineComponent({
  components: { NavBar, Footer },
});
</script>

<style>
.ant-divider-horizontal.ant-divider-with-text {
  border-top-color: #ffff !important;
}
</style>
