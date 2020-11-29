<template>
  <div>
    <cart-list-item v-for="(item,index) in CartList" :key="index" :product="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CartList"])
  },
  components: {
    CartListItem
  },
  activated() {
    console.log(1);
    this.$emit("CartRefresh");
  }
};
</script>
<style scoped>
</style>