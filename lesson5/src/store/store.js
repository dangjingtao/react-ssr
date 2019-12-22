// 储存的入口
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';
import indexReducer from './index';
import userReducer from './user';

const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
});

const serverAxios=axios.create({
    baseURL:'http://localhost:9001'
});

const clientAxios=axios.create({
    baseURL:'/'
});

// 创建store
export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}

export const getClientStore = () => {
    // 把初始状态放到window.__context中，作为全局变量,以此来获取数据。
    const defaultState = window.__context ? window.__context : {};
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}