import {ADD_COUNT,ADD_TO_CART} from "@/store/mutations-types";

export default {
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      // 判断是否添加为同一件商品
      let oldProduct = null
      for(let item of context.state.cartList) {
        if(item.iid === payload.iid) {
          oldProduct = item
        }
      }

      // 判断是否添加为同一件商品
      // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 判断oldProduct是否有值
      if(oldProduct) { // 数量+1
        // oldProduct.count += 1
        context.commit(ADD_COUNT,oldProduct)
        resolve('当前商品数量+1')
      }else { // 添加新的商品
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('已添加商品')
      }
    })
  }
}
