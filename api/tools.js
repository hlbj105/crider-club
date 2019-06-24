import req from './req'

// 获取验证码
export function getVerifyCode(data) {
  return req({
    url: '/verify',
    method: 'get',
    params: data
  })
}
