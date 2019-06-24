import axios from 'axios'
import { Notification } from 'element-ui'
import Cookies from 'js-cookie'
import { baseUrl } from './config'

const service = axios.create({
  baseURL: baseUrl.api,
  timeout: 50000 // request timeout
  // withCredentials: true // 允许携带cookie
})

service.interceptors.request.use(
  config => {
    // config.withCredentials = true
    config.headers['x-csrf-token'] = Cookies.get('csrfToken')

    return config
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  res => {
    const data = res.data
    if (data.code !== 1) {
      Notification({
        message: data.msg,
        title: '提示',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(data)
    } else {
      return res
    }
  },
  error => {
    Notification({
      message: '网络连接错误',
      title: '提示',
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
