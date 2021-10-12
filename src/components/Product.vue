<template>
  <a-card hoverable style="margin: 10px" @click.exact="handleClick">
    <template #cover>
      <img class="responsive_img" alt="example" :src="product.image" />
    </template>
    <a-card-meta :title="product.title">
      <template #description> {{ product.description }}</template>
    </a-card-meta>
    <a-row style="margin-top: 10px">
      <a-col type="flex" align="left"
        ><strong style="color: red">${{ product.price }}</strong></a-col
      >
    </a-row>
    <a-row>
      <a-col type="flex" align="left" span="12"
        ><strike>{{ (product.price * 0.1 + product.price).toFixed(2) }}</strike>
        (10% off)</a-col
      >
      <a-col type="flex" justify="end" align="left" span="12"
        ><span class="garage-title"
          >Category:
          <router-link :to="`/products/category/${product.category}`">{{
            product.category
          }}</router-link>
        </span></a-col
      >
    </a-row>

    <a-col type="flex" align="center">
      <a-button
        type="primary"
        style="margin: 15px"
        @click="handleAddingItemToCart"
      >
        <shoppingcart-outlined /> Add To Cart
      </a-button>
    </a-col>
  </a-card>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  props: {
    product: Object,
  },
  components: {
    "shoppingcart-outlined": ShoppingCartOutlined,
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    function handleClick() {
      router.push({ path: `/product/${props.product.id}` });
    }
    function handleAddingItemToCart(event) {
      event.stopPropagation();
      const item = {
        ...props.product,
        quantity: 1,
        subtotal: props.product.price * 1,
      };
      store.commit("addItemToCart", item);
    }
    return {
      handleClick,
      handleAddingItemToCart,
    };
  },
});
</script>

<style>
.des {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 100px solid transparent;
}
.ant-card-meta-description {
  overflow: hidden;
  font-weight: 500;

  white-space: nowrap;
  text-overflow: ellipsis;
}
.responsive_img {
  width: 100%;
  height: 400px;
  /* object-fit: cover; */
  /* Prevent the image from stretching. So it crops the image to prevent from awkward stretching */
}
.garage-title {
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
</style>
