import React,{useState} from 'react';
import {Route} from 'react-router-dom';

import Index from './container/Index';
import About from './container/About';
import User from './container/User';
import Login from './container/Login';

import NotFound from './container/NotFound';

// 改造成根据配置获取组件

export default [
    {
        path:'/',
        component:Index,
        exact:true,
        key:'index'
    },
    {
        path:'/about',
        component:About,
        exact:true,
        key:'about'
    },
    {
        path:'/user',
        component:User,
        exact:true,
        key:'user'
    },
    {
        path:'/login',
        component:Login,
        exact:true,
        key:'login'
    },
    {
        component:NotFound,
        key:'notFound'
    }
]


// export default (
//     <div>
//         <Route exact path="/" component={Index} />
//         <Route exact path="/about" component={About} />
//     </div>
// );
