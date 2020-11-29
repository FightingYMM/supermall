import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backtop/BackTop";
import {POP, NEW, SELL} from "./const";


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null

    }
  },
  mounted() {
    /**
     * 事件监听相关的方法
     */
      // 1.监听item中图片加载完成 this.$refs.scroll.refresh对这个函数进行防抖操作
    this.newRefresh = debounce(this.$refs.scroll.refresh,200)
    // 2.对监听的事件进行保存
    this.itemImgListener = () => {
      // console.log('---');
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    // console.log('我是混入的内容');
  }
}

// 返回顶部
export const backTopMiXin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    // 点击回到顶部图标，返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
