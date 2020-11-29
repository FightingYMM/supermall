import axios from 'axios'

export function request(config) {
    // 1. 创建axios的实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/w6',
      timeout: 5000
    })
    // 2. axios的拦截器
    instance.interceptors.request.use(config => {
      // console.log(config);
      // 1.config中的信息不符合服务器的要求
      // 2.每次发生网络请求时，都希望在界面中显示一个请求的图标
      // 3.某些网络请求（比如登陆（token）），必须携带一些特殊的信息
      return config
    },err => {
      // console.log(err);
    })
    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    },err => {
      // console.log(err);
    })
    // 3.发送真正的网络请求
    return instance(config)
}
