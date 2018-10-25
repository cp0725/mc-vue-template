import axios from 'axios'

// 接口地址前缀。
let serverBasePath = "http://localhost:3001/api";

var $http = axios.create({
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

$http.interceptors.response.use(function (response) {
  return response.data
})

export default{
  axios,
  $http,
  customizeHttp(options){
    return this.$http = this.axios.create(options)
  },
	get (url, params, callback) {
		return this.$http.get(url, {
      params: params
    })
	},
  post (url, params, callback) {
    return this.$http.post(url, params)
  },
  makeApiMethod(source, target, method) {
  	let getApiNames = Object.keys(source)
  	getApiNames.forEach(apiName=>{
      target[apiName] = (params)=>{
        return this[method || 'get'](serverBasePath + source[apiName], params)
      }
  	})
  }
}
