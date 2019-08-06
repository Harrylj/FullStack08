import axios from 'axios'

export default {
  login(user) {
    // 这个地址对应 vue.config.js 里的地址
    return axios.get('/api/login', { params:user})
  }
}