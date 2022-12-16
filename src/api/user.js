import request from '@/utils/request'
// console.log(request);

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
  return request({

  })
}

export function logout() {
  return request({

  })
}
