<template>
  <!-- <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }"> -->
  <a-menu v-model="current" mode="horizontal" theme="light">
    <a-menu-item key="phone">
      <phone-outlined />
      <span> 01914982613</span>
    </a-menu-item>
    <a-menu-item class="dark" key="mail">
      <mail-outlined></mail-outlined>
      alamin@brainstation-23.com
    </a-menu-item>
    <a-menu-item key="address" class="dark">
      <environment-outlined />
      <span> 4,mohakhali,dhaka,bangladesh</span>
    </a-menu-item>
    <a-menu-item class="account dark" key="account">
      <user-outlined />
      Account
    </a-menu-item>
  </a-menu>

  <a-menu v-model="current" mode="horizontal" theme="light">
    <a-row
      type="flex"
      justify="space-between"
      align="middle"
      :style="{
        width: width,
      }"
    >
      <a-col :span="6">
        <!-- <a-menu-item key="logo"> -->
        <a-image :width="150" :src="logo" />
        <!-- </a-menu-item> -->
      </a-col>
      <a-col :span="12">
        <a-menu-item key="searchBar">
          <a-input-search
            placeholder="input search text"
            enter-button
            @search="onSearch"
          />
        </a-menu-item>
      </a-col>
      <a-col :span="6" align="right">
        <a-menu-item>
          <a-popover title="Cart" placement="rightBottom">
            <!-- <p @click="hide">Close</p> -->
            <template #content>
              <a-list item-layout="horizontal" :data-source="cartList">
                <template #renderItem="{ item }">
                  <a-list-item>
                    <a-list-item-meta>
                      <template #title>
                        {{ item.title }}
                      </template>
                      <template #avatar>
                        <a-avatar :src="item.image" />
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                </template>
              </a-list>
              <a-row type="flex" justify="space-between" align="bottom">
                <a-button type="primary" size="large" @click="handleViewCart"
                  >View Cart</a-button
                >
                <a-button type="primary" size="large" @click="handleCheckout"
                  >Checkout</a-button
                >
              </a-row>
            </template>
            <a-badge :count="numberOfItem">
              <shoppingcart-outlined :style="shoppingCartIcon" />
            </a-badge>
          </a-popover>
        </a-menu-item>
      </a-col>
    </a-row>
  </a-menu>

  <a-menu v-model="current" mode="horizontal" theme="light">
    <a-menu-item key="home">
      <!-- <span class="menu-item"> Home</span> -->
      <router-link to="/">Home</router-link>
    </a-menu-item>
    <a-sub-menu>
      <template v-slot:title>
        <span class="submenu-title-wrapper">Categories</span>
      </template>
      <!-- <a-menu-item-group title="Item 1"> -->

      <a-menu-item key="electronics"
        ><router-link to="/products/category/electronics"
          >Electronics</router-link
        ></a-menu-item
      >
      <a-menu-item key="jewelery">
        <router-link to="/products/category/jewelery"
          >Jewelery</router-link
        ></a-menu-item
      >
      <!-- </a-menu-item-group> -->
      <!-- <a-menu-item-group title="Item 2"> -->
      <a-menu-item key="men's clothing">
        <router-link to="/products/category/men's clothing"
          >Men's clothing</router-link
        ></a-menu-item
      >
      <a-menu-item key="women's clothing"
        ><router-link to="/products/category/women's clothing"
          >Women's clothing</router-link
        ></a-menu-item
      >
      <!-- </a-menu-item-group> -->
    </a-sub-menu>
    <a-menu-item key="hot_deals"> Hot Deals </a-menu-item>
    <a-menu-item key="contact_us"> Contact Us </a-menu-item>
    <a-menu-item key="blog"> Blog </a-menu-item>
  </a-menu>
  <!-- </a-layout-header>
  </a-layout> -->
</template>
<script>
import { defineComponent } from "vue";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    UserOutlined,
    "shoppingcart-outlined": ShoppingCartOutlined,
  },
  data() {
    return {
      current: ["mail"],
      appstore: "appstore",
      logo: require("../assets/elogo5.png"),
      width: 100 + "%",
      shoppingCartIcon: {
        fontSize: 35 + "px",
        color: "#FF6952",
      },
      visible: true,
    };
  },
  computed: {
    numberOfItem() {
      return this.$store.state.cartList.length;
    },
    cartList() {
      return this.$store.state.cartList;
    },
  },
  methods: {
    handleViewCart() {
      this.$router.push({ path: `/cart` });
    },
    handleCheckout() {
      this.$router.push({ path: `/check-out` });
    },
  },
});
</script>

<style>
.ant-menu-item:hover {
  color: #ff6952 !important;
}

.account {
  margin-left: auto !important;
}
.test {
  border: red 1px solid !important;
}

.ant-menu-item-active::after {
  border-bottom: 2px solid #ff6952 !important;
}
.ant-btn-primary {
  background: #ff6952 !important;
  border: #ff6952 !important;
}
.menu-item {
  /* font-size: 20px; */
  font-weight: bold;
}
.ant-layout-header {
  padding: 0% !important;
}
.ant-popover {
  width: 400px;
}
/* .ant-spin-container {
  width: 200px;
  padding: 20px;
  height: 150px;
} */
</style>
