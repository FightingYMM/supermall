<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">Mall</div>
    </nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <user-info></user-info>
    <user-assets></user-assets>
    <list-view :list="serviceList"></list-view>
    <user-bottom></user-bottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childComps/UserInfo";
import UserAssets from "./childComps/UserAssets";
import ListView from "./childComps/ListView";
import UserBottom from "./childComps/UserBottom";
export default {
  name: "",
  data() {
    return {
      orderList: [
        { icon: "../../../assets/img/watermark.png", text: "" },
        { icon: "", text: "" },
        { icon: "", text: "" }
      ],
      serviceList: [
        { icon: "../../../assets/img/profile/设置.png", text: "我的设置" },
        { icon: "~assets/img/profile/", text: "测试功能" }
      ]
    };
  },
  created() {},
  mounted() {},
  components: {
    NavBar,
    UserInfo,
    ListView,
    UserAssets,
    UserBottom
  }
};
</script>
<style scoped>
.nav-bar {
  font-weight: 700;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
