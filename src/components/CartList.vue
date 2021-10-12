<template>
  <div style="margin: 30px">
    <a-table :columns="columns" :data-source="cartList" bordered>
      <template #image="{ record }">
        <img
          style="max-width: 30%; max-height: auto"
          :alt="record.title"
          :src="record.image"
        />
      </template>
      <template #price="{ text }">${{ text }}</template>
      <template #quantity="{ record }">
        <a-row style="display: inline">
          <a-button type="primary" @click="decrement(record.id)">
            <template #icon><MinusOutlined /></template>
          </a-button>
          <span style="padding: 10px">{{ record.quantity }}</span>
          <a-button
            :style="{
              background: 'green',
              borderColor: 'green',
              color: 'white',
            }"
            @click="increment(record.id)"
          >
            <template #icon><PlusOutlined /></template>
          </a-button>
        </a-row>
      </template>
      <template #action="{ record }"
        ><span @click="removeItem(record.id)"
          ><DeleteOutlined style="color: #ff6952; cursor: pointer" /></span
      ></template>
      <template #footer>
        <a-row type="flex" justify="end"
          ><strong>Total ${{ grandTotal }}</strong></a-row
        >
      </template>
    </a-table>
    <a-row type="flex" justify="space-between" align="end">
      <a-button
        :style="{
          background: 'green',
          borderColor: 'green',
          color: 'white',
        }"
        @click="handleContinueShopping"
      >
        <LeftCircleOutlined /> Continue Shopping
      </a-button>
      <a-button type="primary" @click="handleCheckout">
        Checkout <RightCircleOutlined
      /></a-button>
    </a-row>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import {
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const columns = ref([
      {
        title: "Image",
        dataIndex: "image",
        slots: { customRender: "image" },
        width: "20%",
      },
      {
        title: "Title",
        className: "title",
        dataIndex: "title",
      },

      {
        title: "Price",
        dataIndex: "price",
        slots: { customRender: "price" },
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        slots: { customRender: "quantity" },
      },
      {
        title: "Subtotal",
        dataIndex: "subtotal",
      },
      {
        title: "Action",
        slots: { customRender: "action" },
      },
    ]);
    //const data = ref(...store.);
    const cartList = computed(() => store.state.cartList);
    const grandTotal = computed(() => {
      return store.state.cartList.reduce(
        (accumulator, currentValue) => accumulator + currentValue.subtotal,
        0
      );
    });
    function increment(id) {
      store.commit("incrementItemQuantity", { id });
    }
    function decrement(id) {
      store.commit("decrementItemQuantity", { id });
    }
    function removeItem(id) {
      store.commit("removeItem", { id });
      message.info("Item removed successfully");
    }
    function handleCheckout() {
      router.push({ path: "/check-out" });
    }
    function handleContinueShopping() {
      router.push({ path: "/" });
    }
    return {
      columns,
      cartList,
      increment,
      decrement,
      grandTotal,
      handleCheckout,
      removeItem,
      handleContinueShopping,
    };
  },
  components: {
    PlusOutlined,
    MinusOutlined,
    DeleteOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>

<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
thead[class*="ant-table-thead"] th {
  background-color: #ff6952 !important;
  color: #ffffff !important;
}
</style>
