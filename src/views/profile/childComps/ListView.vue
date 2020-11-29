<template>
  <div class="list-view">
    <div>
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="text"></slot>
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
  methods: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>