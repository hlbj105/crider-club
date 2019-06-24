import req from './req'

// 注册
export function signup(data) {
  return req({
    url: '/signup',
    method: 'post',
    data
  })
}
