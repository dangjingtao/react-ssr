// 定义actionType
const GET_INFO = 'USER/GET_USERINFO';

// actionCreator
let getInfo = info => ({
    type: GET_INFO,
    info
});

// 异步的dispatchAction
export const getUserInfo = server => {
    return (dispatch, getState, $axios) => {
        // 返回promise
        return $axios.get('/api/user/info').then((res) => {
            const { info } = res.data;
            console.log('info', info);
            dispatch(getInfo(info));
        }).catch(e => {
            console.log('e',e)
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