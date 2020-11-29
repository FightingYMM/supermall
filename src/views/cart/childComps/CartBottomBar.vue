<template>
  <div id="cart-bottom-bar">
    <div class="button">
      <check-button
        class="check-button"
        :isClick="CheckTotal"
        @click.native="CheckAll"
      />
      <span>全选</span>
    </div>
    <div class="price">总计:￥{{ totalPrice }}</div>
    <div class="calculate" @click="calc">去计算({{ CheckLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.isCheck;
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    ...mapGetters(["CartList", "CartLength"]),
    CheckLength() {
      return this.CartList.filter(item => {
        return item.isCheck == true;
      }).length;
    },
    CheckTotal() {
      //判断是否全选
      if (this.CartLength == 0) return false;
      // return !this.CartList.filter(item => !item.isCheck).length;
      return !this.CartList.find(item => !item.isCheck);
    }
  },
  methods: {
    CheckAll() {
      if (this.CheckTotal) {
        this.$store.dispatch("SelectNone");
      } else {
        this.$store.dispatch("SelectAll");
      }
    },
    calc() {
      if (!this.CheckTotal) {
        this.$toast.show("请先添加商品");
      }
    }
  }
};
</script>
<style scoped>
#cart-bottom-bar {
  display: flex;
  height: 40px;
  background-color: #eee;
  position: absolute;
  bottom: 49px;
  z-index: 8;
  left: 0;
  right: 0;
}
.button {
  width: 70px;
  /* text-align: center; */
  display: flex;
  line-height: 40px;
  /* align-items: center; */
}
.check-button {
  position: relative;
  top: 2.5px;
  /* width: 20px; */
  padding: 0 5px 0 10px;
}
.price {
  flex: 1;
  margin-left: 20px;
  line-height: 40px;
}
.calculate {
  text-align: center;
  width: 100px;
  color: #fff;
  background-color: rgb(255, 57, 57);
  /* padding: 0 20px; */
  line-height: 40px;
  /* position: absolute;
  bottom: 0;
  right: 0; */
}
</style>
