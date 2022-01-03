import axios from '../axios/http';


export const getList = (param) => {
    return axios({
        url: `/test/getList`,
        method: 'get',
        params: {
            param,
        }
    });
};


export const postList = (params) => {
    return axios({
        url: `/test/postList`,
        method: 'post',
        data:params
    });
};


export const dccList = (params) => {
    return axios({
        url: `/dcc/post`,
        method: 'post',
        data: params
    })
}

const api = {
    getList,
    postList,
    dccList,
}

export default api;