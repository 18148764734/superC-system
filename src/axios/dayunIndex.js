import axios from 'axios'
import { ElMessage,ElLoading,ElNotification  } from 'element-plus'
import Cookies from 'js-cookie'
const service = axios.create({
    baseURL:'http://dayun.vipgz4.91tunnel.com'
})

let loading ;
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = Cookies.get('token')
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImQ4NTc4ZWRmODQ1OGNlMDZmYmM1YmI3NmE1OGM1Y2E0IiwiZXhwIjoxNjc4OTYxMDUxLCJ1c2VybmFtZSI6Im1ldGEifQ.nd_zMUs0wndyvrTUipF7691qOsvVgduCQ2NCrdHxFCw"

    if(token){
      config.headers['token'] = token
    }
    loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    loading.close()
    return response;
  }, function (error) {
    loading.close()
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElNotification({
      title: 'Error',
      message: error,
      type: 'error',
    })
    return Promise.reject(error);
  });

export default service