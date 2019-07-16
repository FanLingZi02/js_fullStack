import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code != 200) {
    vue.$toast('网络异常')
    vue.$hideLoading()
    return Promise.reject(res)
  }
  return res
}, (error) => {
  vue.$toast('网络异常')
    vue.$hideLoading()
    return Promise.reject(error)
})

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })
    .catch((eror) => {
      reject(error)
    })
  })
}