import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
const state = {
  // 上来先获取token  有则有  没有则为null
  token: getToken()

}
const mutations = {
  getToken(state) {
    getToken()
  },
  setToken(state, token) {
    state.token = token
    setToken(state.token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }

}
const actions = {
  async login(context, data) {
    const res = await login(data)
    context.commit('setToken', res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
