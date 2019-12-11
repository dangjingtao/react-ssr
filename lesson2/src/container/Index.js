import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getIndexList} from '../store/index';

function Index(props){
    const [count,setCount]=useState(1);
    useEffect(()=>{
        props.getIndexList();
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

export default connect(
    state=>({list:state.index.list}),
    {getIndexList}
)(Index);