<template>
  <div id="detail">
    <detail-nav-bar @navClick="titleClick" ref="detailNavBar"/>
    <scroll class="content-detail"
            ref="scroll"
            :probe-type="3"
            @scroll="detailScroll">
      <detail-swiper :top-iamges="topImages" ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-images-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <detail-param-info :paramInfo = "itemParams" ref="param"/>
      <detail-comments-info :comment-info="commentsInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>

  </div>
</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailImagesInfo from "@/views/detail/childComps/DetaiImagesInfo";
  import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
  import DetailCommentsInfo from "@/views/detail/childComps/DetailCommentsInfo";
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";


  import {getDetail,getRecommend,Goods, Shop, } from "@/network/detail";
  import {itemListenerMixin,backTopMiXin} from "@/common/mixin";

  import {mapActions} from 'vuex'
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImagesInfo,
      DetailParamInfo,
      DetailCommentsInfo,
      DetailBottomBar,

      Scroll,
      GoodsList,


    },
    mixins: [itemListenerMixin,backTopMiXin],
    data(){
      return {
        iid: null,
        // titleClick: {},
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        itemParams: {},
        commentsInfo: {},
        recommends: [],
        detailTopYs: [],
        detailIndex: 0,

      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid
      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        // 获取顶部轮播图片数据
        const data = res?.result
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns, data.shopInfo.services)

        // 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 取出详情信息
        this.detailInfo = data.detailInfo

        // 取出参数信息
        this.itemParams = data.itemParams

        // 取出第一条评论信息
        if (data.rate.cRate !== 0){
          this.commentsInfo = data.rate.list[0]
        }

        // this.$nextTick(() => {
        //   // 根据最新的数据，对应的DOM已经渲染完成，但是图片依旧没有加载完毕（目前获取到的detailTopYs不包含图片）
        //   this.detailTopYs = []
        //   this.detailTopYs.push(0);
        //   this.detailTopYs.push(this.$refs.param.$el.offsetTop);
        //   this.detailTopYs.push(this.$refs.comment.$el.offsetTop);
        //   this.detailTopYs.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.detailTopYs);
        // })
      })
      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      // 4.给detailTopYs赋值(对this.detailYopYs赋值的操作进行防抖)，之前已对图片做过防抖操作
      //  获取详情页导航栏对应主题的高度
      this.getDetailTopYs = () => {
        this.detailTopYs = []
        this.detailTopYs.push(0);
        this.detailTopYs.push(this.$refs.param.$el.offsetTop-44);
        this.detailTopYs.push(this.$refs.comment.$el.offsetTop-44);
        this.detailTopYs.push(this.$refs.recommend.$el.offsetTop-44);
        //增加一个最大值
        this.detailTopYs.push(Number.MAX_VALUE)
        // console.log(this.detailTopYs);
      }
    },
    mounted() {},
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),

      // 监听详情的图片加载完成
      detailImageLoad() {
        this.newRefresh()
        // this.getDetailTopYs()

        //调用getDetailTopYs
        this.getDetailTopYs()
      },

      //监听详情页导航栏的点击
      titleClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0,-this.detailTopYs[index],100)
      },

      //监听滚动到的位置信息
      detailScroll(position) {
        // console.log(position);
        // 1.获取y值
        const positionY = -position.y

        // 2.与详情页导航栏主题所对应位置比较 即判读位置所在区域对于主题为几：index=0，1，2，3（商品，参数，评论,推荐）
        let length = this.detailTopYs.length
        // for(let i=0;i<length ;i++){
          // if(this.detailIndex !== i && ((i < length -1 && positionY >= this.detailTopYs[i] && positionY<
          //   this.detailTopYs[i+1]) || (i === length-1 && positionY >= this.detailTopYs[i]))){
          //   this.detailIndex = i
          //   // console.log(this.detailIndex);
          //   this.$refs.detailNavBar.currentIndex = this.detailIndex
          // }
        // }
        for(let i=0;i<length ;i++){
          if(this.detailIndex !== i && (positionY > this.detailTopYs[i] && positionY < this.detailTopYs[i+1])) {
            this.detailIndex = 1;
            this.$refs.detailNavBar.currentIndex = this.detailIndex
          }
        }

        // 是否显示回到顶部图标
        this.isShowBackTop = (-position.y) > 1500

        // 决定tabControl是否吸顶（position： fixed）
        this.isTabFixed = (-position.y) > this. tabOffsetTop
      },

        //监听购物车
      addToCart() {
        // console.log('---');
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车（vuex）
        // this.$store.commit('addCart',product)
        //调用action中的方法
        // 方法一：promise
        // this.$store.dispatch('addCart',product).then(res => {
        //   console.log(res);
        // })
        //方法二：actions映射(mapActions)

        this.addCart(product).then(res => {
          this.$toast.show(res,1500)
        })

        // 3.添加购物车成功
      }
    },
  }
</script>

<style scoped>
*{ touch-action: none; }
#detail {
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    height: 100vh;
  }

  .content-detail {
    overflow: hidden;
    height: calc(100% - 44px - 49px);
  }
</style>
