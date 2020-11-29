import {ADD_COUNT,ADD_TO_CART} from "@/store/mutations-types";

export default {
    // mutations 存在的唯一目的是为了修改state的状态
    // mutations 的每个方法尽可能完成的时间比较单一一点

    [ADD_COUNT](state,payload) {
      payload.count ++
    },
    [ADD_TO_CART](state,payload) {
      payload.check = false
      state.cartList.push(payload)
  },
}
