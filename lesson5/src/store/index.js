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
    return (dispatch, getState, $axios) => {
        return $axios.get('/api/course/list').then((res)=>{
            const { list } = res.data;
            console.log('list',list)
            dispatch(changeList(list));
        }).catch(e=>{
            console.log('err',e)
            // 容错
            return dispatch(changeList({
                errMsg:e||e.message
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