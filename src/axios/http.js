import axios from 'axios';

axios.defaults.timeout = 20000;
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
//设置默认url
axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// HTTPresponse拦截
axios.interceptors.response.use(
    (res) => {
        const status = Number(res.status) || 200;
        // 如果是白名单类型放入catch自行处理
        if (status !== 200) {
            return Promise.reject(res);
        }
        return res.data;
    },
    (error) => {
        return Promise.reject(new Error(error));
    }
);

export default axios;