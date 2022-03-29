import axios from 'axios'
import JSONBig from "json-bigint"
const request = axios.create({
    baseURL: "http://localhost:3007/",
    // 自定义后端返回的原始数据
    // data:后端返回的原始数据说白了就是JSON格式的字符串
    // transformResponse: [
    //     function(data) {
    //         try {
    //             return JSONBig.parse(data)
    //         }catch(err){
    //             return err
    //         }
    //     }
    // ]
})

export default request
// request.interceptors.request.use(function(config){
//     // 请求发起时会经过这里
//     // config:本次请球配置对象 里面有一个属性headers请求头

// })