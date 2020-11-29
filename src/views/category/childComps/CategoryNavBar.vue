<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">用户分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.nav-bar {
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  background-color: var(--color-tint);
}
</style>