<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{CartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div>
        <cart-list @CartRefresh="CartRefresh" />
      </div>
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    CartRefresh() {
      this.$refs.scroll.refresh();
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  computed: {
    // CartLength() {
    //   return this.$store.state.cartList.length;
    //   return this.$store.getters.CartLength;
    // }
    //mapGetters可以将getters转为计算属性
    ...mapGetters(["CartLength"])
  }
};
</script>
<style scoped>
#Cart {
  height: 100vh;
  position: relative;
  /* height: calc(100%-44px-49px); */
}
.content {
  /* height: 100%;
  overflow: hidden; */
  position: absolute;
  left: 0px;
  right: 0px;
  top: 44px;
  bottom: 89px;
  overflow: hidden;
}
.nav-bar {
  position: relative;
  z-index: 9;
  font-weight: 700;
  background: var(--color-tint);
  color: #fff;
}
</style>
