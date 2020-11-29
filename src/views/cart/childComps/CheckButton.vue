<template>
  <div class="icon-selector">
    <img src="~assets/img/cart/tick.svg" alt :class="{activated:isClick}" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    isClick: {
      type: Boolean
    }
  }
};
</script>
<style scoped>
.icon-selector img {
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer; /*添加光标 光标呈现为指示链接的指针(一只手) */
}
.activated {
  background-color: var(--color-tint);
}
</style>