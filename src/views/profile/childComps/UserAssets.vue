<template>
  <div class="user-assets">
    <div class="user-balance">
      <div>
        <span>{{balance|balanceFilter}}</span>元
      </div>
      <div>我的余额</div>
    </div>
    <div class="user-discount">
      <div>
        <span>{{discount}}</span>个
      </div>
      <div>我的优惠</div>
    </div>
    <div class="user-intergral">
      <div>
        <span>{{integral}}</span>分
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  props: {
    balance: {
      type: Number,
      default: 0
    },
    discount: {
      type: Number,
      default: 0
    },
    integral: {
      type: Number,
      default: 0
    }
  },
  filters: {
    balanceFilter(value) {
      return value.toFixed(2);
    }
  }
};
</script>
<style scoped>
.user-assets {
  padding: 5px 0 5px 0;
  font-size: 10px;
  display: flex;
  text-align: center;
  line-height: 30px;
  border-bottom: 10px solid #f3f3f4;
}
.user-balance {
  flex: 1;
  border-right: 1px solid #f3f3f4;
}
.user-discount {
  flex: 1;
  border-right: 1px solid #f3f3f4;
}
.user-intergral {
  flex: 1;
}
.user-assets span {
  color: var(--color-high-text);
  font-size: 19px;
  margin-right: 1px;
}
</style>