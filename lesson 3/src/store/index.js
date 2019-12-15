import axios from 'axios';

// 定义actionType
const GET_LIST = 'INDEX/GET_LIST';

// actionCreator
const changeList = list => ({
    type: GET_LIST,
    list
});

// 异步的dispatchAction
export const getIndexList = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:9001/course/list').then((res)=>{
            const { list } = res.data;
            console.log('list',list)
            dispatch(changeList(list));
        }).catch(e=>{
            // 容错
            return dispatch(changeList({
                errMsg:e.message
            }));
        }); 
    }
}

// 初始状态
const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                list: action.list
            }
            return newState;
        default:
            return state;
    }
}