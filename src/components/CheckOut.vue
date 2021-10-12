<template>
  <a-row>
    <a-alert
      v-if="placeOrder"
      message="Success Tips"
      type="success"
      show-icon
    />
    <a-col :offset="1"></a-col>
    <a-col :span="11">
      <h4>BILLING ADDRESS</h4>
      <a-input class="input" placeholder="Full name" />
      <a-input class="input" placeholder="Email" />
      <a-input class="input" placeholder="Full address" />
      <a-input class="input" placeholder="Telephone" />
      <h4 style="margin-top: 20px">OTHER NOTES</h4>
      <a-textarea
        placeholder="please writes your necessary notes here..."
        allow-clear
      />
    </a-col>
    <a-col style="margin-left: 20px; margin-bottom: 20px" :span="11">
      <h3 type="flex" justify="center" align="middle">Your order</h3>
      <a-table :dataSource="cartList" :columns="columns">
        <template #quantityPrice="{ record }">
          {{ record.quantity + "*" + record.price }}
        </template>
      </a-table>
      <a-divider />
      <a-row type="flex" justify="space-between">
        <span>Shipping</span>
        <strong>Free</strong>
      </a-row>
      <a-divider />
      <a-row style="margin-bottom: 10px" type="flex" justify="space-between">
        <span>Total</span>
        <span style="color: red; font-weight: bold">${{ grandTotal }}</span>
      </a-row>
      <a-button block danger ghost @click="handleOrder"> Place Order</a-button>
    </a-col>
    <a-col :offset="1"></a-col>
  </a-row>
</template>

<script lang="ts">
import { notification } from "ant-design-vue";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const placeOrder = ref(false);
    const columns = ref([
      {
        title: "Product",
        className: "title",
        dataIndex: "title",
      },

      {
        title: "Quantity & Price",
        slots: { customRender: "quantityPrice" },
      },

      {
        title: "Subtotal",
        dataIndex: "subtotal",
      },
    ]);
    const grandTotal = computed(() => {
      return store.state.cartList.reduce(
        (accumulator, currentValue) => accumulator + currentValue.subtotal,
        0
      );
    });
    const cartList = computed(() => store.state.cartList);
    function handleOrder() {
      store.commit("clearCartList");
      notification.success({
        message: "Order Place Successfully",
      });
    }
    return {
      columns,
      cartList,
      grandTotal,
      placeOrder,
      handleOrder,
    };
  },
});
</script>

<style scoped>
.test {
  border: red 1px solid;
}
.ant-input {
  margin-top: 10px;
  padding: 10px;
}
</style>
