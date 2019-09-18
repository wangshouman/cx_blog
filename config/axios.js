import axios from 'axios';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    return config
}, function(err) {
    return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response
}, function(err) {
    return Promise.reject(err)
})