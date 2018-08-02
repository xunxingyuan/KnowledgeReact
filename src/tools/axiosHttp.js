/**
 *
 http配置
 */
//
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
// 超时时间
axios.defaults.timeout
  = 300000
//
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  // config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
})
// http请求拦截器
axios.interceptors.request.use(config => {

    return config
  },
  error => {

    return Promise.reject(error)
  })
//
// http响应拦截器
axios.interceptors.response.use(data => {
    // 响应成功关闭loading
    if(data.data.code === 10005){
      alert(data.data.msg);
      window.location = '/login'
    }
    return data
  },
  error => {
    return Promise.reject(error)
  })

export default axios
