import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ShowProductByCategory from "@/components/ShowProductByCategory.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import CartList from "@/components/CartList.vue";
import CheckOut from "@/components/CheckOut.vue";
import About from "@/views/About.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartList,
  },
  {
    path: "/check-out",
    name: "checkOut",
    component: CheckOut,
  },
  {
    path: "/products/category/:category",
    name: "showProductByCategory",
    component: ShowProductByCategory,
  },
  {
    path: "/product/:product_id",
    name: "product details",
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

export default router;
