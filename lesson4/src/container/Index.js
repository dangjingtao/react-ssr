import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getIndexList} from '../store/index';

function Index(props){
    if(props.list.errMsg){
        return <h1>{props.info.errMsg}</h1>
    }

    const [count,setCount]=useState(1);
    useEffect(()=>{
        if(!props.list.length){
            props.getIndexList();
        }
    },[]);
    return <div>
        <h1>react ssr</h1>
        <span>{count}</span><br/>
        <button onClick={()=>{setCount(count+1)}}>+</button><hr/>
        <ul>
            {props.list.map((item,index)=>(
                <li key={index}>{item.id}-{item.name}</li>
            ))}
        </ul>
    </div>
}

Index.loadData=(store)=>{
    // console.log(store)->undefined
    return store.dispatch(getIndexList());
}
export default connect(
    state=>({list:state.index.list}),
    {getIndexList}
)(Index);