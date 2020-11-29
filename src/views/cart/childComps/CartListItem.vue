<template>
  <div id="cart-list-item">
    <check-button class="item-selector" :isClick="product.isCheck" @click.native="CheckClick" />
    <div class="cart-image">
      <img :src="product.image" alt />
    </div>
    <div class="cart-info">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="item-info">
        <div class="price">￥{{product.price}}</div>
        <div class="count-comp">
          <button class="button" @click="decCount">-</button>
          <div class="count">x{{product.count}}</div>
          <button class="button" @click="addCount">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  components: {
    CheckButton
  },
  methods: {
    CheckClick() {
      // this.product.isCheck = !this.product.isCheck;
      this.$store.dispatch("CheckClick", this.product.iid);
    },
    addCount() {
      this.$store.commit("increaseCount", this.product.iid);
    },
    decCount() {
      if (this.product.count > 1)
        this.$store.commit("decraseCount", this.product.iid);
    }
  }
};
</script>
<style scoped>
#cart-list-item {
  padding: 5px;
  display: flex;
  border-bottom: 1px solid #ccc;
  width: 100%;
}
.item-selector {
  position: relative;
  top: 40px;
  right: 2.5px;
}
.cart-image img {
  position: relative;
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.title,
.desc {
  white-space: nowrap; /*规定段落中的文本不进行换行 */
  overflow: hidden;
  text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本 */
}
.cart-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  /* position: relative; */
  overflow: hidden;
}
.cart-info .desc {
  margin-top: 15px;
  color: #666;
  font-size: 12px;
}
.item-info {
  display: flex;
  margin-top: 20px;
  /* margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px; */
}
.item-info .count-comp {
  display: flex;
}
.cart-info .price {
  flex: 1;
  color: orangered;
  /* float: right; */
}
.count {
  padding: 0 10px;
}
.button {
  text-align: center;
  width: 20px;
  background-color: var(--color-tint);
}
</style>