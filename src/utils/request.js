/*
 * @Author: your name
 * @Date: 2021-04-16 18:01:22
 * @LastEditTime: 2021-05-20 16:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-iot-project\src\utils\request.js
 */
import axios from 'axios'
import {
    Message,
    Notification
} from 'element-ui'
// import store from '@/store'
// import {
//     getToken
// } from '@/utils/auth'


const service = axios.create({
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000
})

// request interceptor
service.interceptors.request.use(
    config => {
        // if (store.getters.token) {
        //     config.headers['Authorization'] = 'hello world'
        // }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 错误处理
const errorHandler = (error) => {
    if (error.response) {
        Notification({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
    }
    return Promise.reject(error)
}


service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res);
        if (res.code != '200') {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
        }
        return res
    }, errorHandler
)

export default service
