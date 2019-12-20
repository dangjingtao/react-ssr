import React ,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../store/user';

function User(props){
    // 容错处理
    if(props.info.errMsg){
        return <h1>{props.info.errMsg}</h1>
    }
    
    useEffect(()=>{
        if(!props.info.name){
            props.getUserInfo();
        }
    },[]);
    const {name,honor}=props.info;
    return <div>
        <h1>你好，{name}，你当前的成就是：
        <span style={{textDecoration:'underline'}}>{honor}</span>
        </h1>
    </div>
}

User.loadData=(store)=>{
    return store.dispatch(getUserInfo());
}

export default connect(
    state=>({info:state.user.info}),
    {getUserInfo}
)(User);