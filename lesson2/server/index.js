import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import {StaticRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from '../src/store/store';

import App from '../src/App';

const app=express();

app.use(express.static('public'));

// 监听所有页面
app.get('*',(req,res)=>{
    // react组件解析为html
    const content=renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
            {App}
        </StaticRouter>
        </Provider>
    );
    res.send(`
    <html>
        <head>
            <meta charset="UTF-8">
            <title>react ssr</title>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </head>
    </html>
    `)
});

app.listen(9000,()=>{
    console.log('server is runing..')
});