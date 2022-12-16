// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 没有写死 根据环境变量不同的路径 /api触发反向代理
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use(
  function(response) {
    const { success, message, data } = response.data
    if (success) {
      return data // 返回解构后的data
    } else {
      Message.error(message)
      return Promise.reject(new Error(message)) // 哪些对象可以通过new出来
    }
  },
  error => {
    Message.error(error.message)
    return Promise.reject(error)
  }

) // 响应拦截器
export default service // 导出axios实例
