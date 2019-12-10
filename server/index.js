import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import App from '../src/App';


const app=express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    // react组件解析为html
    const content=renderToString(App);
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