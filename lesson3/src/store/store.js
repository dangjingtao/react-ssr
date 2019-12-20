// 储存的入口
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import indexReducer from './index';
import userReducer from './user';

const reducer = combineReducers({
    index: indexReducer,
    user:userReducer
});


// 创建store
// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
export const getServerStore=()=>{
    return createStore(reducer, applyMiddleware(thunk));
}

export const getClientStore=()=>{
    // 把初始状态放到window.__context中，作为全局变量,以此来获取数据。
    const defaultState=window.__context?window.__context:{};
    console.log(111,defaultState)
    return createStore(reducer, defaultState,applyMiddleware(thunk))
}

