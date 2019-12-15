import axios from 'axios';

// 定义actionType
const GET_INFO = 'USER/GET_USERINFO';

// actionCreator
let getInfo = info => ({
    type: GET_INFO,
    info
});

// 异步的dispatchAction
export const getUserInfo = server => {
    return (dispatch, getState, axiosInstance) => {
        // 返回promise
        return axios.get('http://localhost:9001/user/info1').then((res) => {
            const { info } = res.data;
            console.log('info', info);
            dispatch(getInfo(info));
        }).catch(e => {
            // 容错
            return dispatch(getInfo({
                errMsg: e.message
            }));
        })
    }
}

// 初始状态
const defaultState = {
    info: {
        name: '',
        honor: ''
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_INFO:
            const newState = {
                ...state,
                info: action.info
            }
            return newState;
        default:
            return state;
    }
}