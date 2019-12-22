import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getIndexList} from '../store/index';
import styles from '../style/index.css';

function Index(props){
    // 如果是服务端渲染
    if(props.staticContext){
        props.staticContext.css.push(styles._getCss())
    }

    if(props.list.errMsg){
        return <h1>{props.info.errMsg}</h1>
    }

    const [count,setCount]=useState(1);
    useEffect(()=>{
        if(!props.list.length){
            props.getIndexList();
        }
    },[]);
    return <div className={styles.container}>
        <h1 className={styles.title}>react ssr</h1>
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