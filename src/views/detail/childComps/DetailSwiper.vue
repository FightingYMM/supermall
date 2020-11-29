<template>
  <div class="detail-swiper">
    <swiper class="swiper2">
      <swiper-item  v-for="item in topIamges">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "@/components/common/swiper/Swiper";
  import SwiperItem from "@/components/common/swiper/SwiperItem";
  
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topIamges: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swiper2{
    height: 300px;
    overflow: hidden;
  }
</style>