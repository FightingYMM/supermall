<template>
  <div class="user-bottom">
    <div class="top">
      <div>
        <img src="~assets/img/user/会员.png" alt />
        <p class="text">会员卡</p>
      </div>
      <div>
        <img src="~assets/img/user/活动.png" alt />
        <p class="text">活动日历</p>
      </div>
      <div>
        <img src="~assets/img/user/发现.png" alt />
        <p>发现更多</p>
      </div>
    </div>
    <div>
      <div>
        <img src="~assets/img/user/设置.png" alt />
        <p class="text">我的设置</p>
      </div>
      <div>
        <img src="~assets/img/user/测试.png" alt />
        <p>测试功能</p>
      </div>
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
  mounted() {}
};
</script>
<style scoped>
.user-bottom {
  line-height: 40px;
}
.user-bottom img {
  width: 30px;
  vertical-align: middle;
  margin-right: 10px;
}
.user-bottom p {
  display: inline-block;
  vertical-align: middle;
}
.top {
  border-bottom: 10px solid #f6f6f6;
}
</style>