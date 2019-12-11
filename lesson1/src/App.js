import React,{useState} from 'react';

function App(props){
    const [count,setCount]=useState(1);
    return <div>
        <h1>{props.title}:react ssr</h1>
        <span>{count}</span><br/>
        <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
}

export default <App title="djtao" />;