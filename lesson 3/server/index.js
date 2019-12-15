import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { StaticRouter, matchPath, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { getServerStore } from '../src/store/store';

import routes from '../src/App';
import Header from '../src/component/Header';

const store = getServerStore();

const app = express();
app.use(express.static('public'));


// 监听所有页面
app.get('*', (req, res) => {
    // 【服务端异步请求总体思路】根据路由获取到的组件，并且拿到loadData，获取数据

    // 1.定义一个数组来存放所有网络请求
    const promises = [];
    // 2.通过遍历来匹配路由，
    routes.forEach(route => {
        // 3.通过 `matchPath` 判断当前是否匹配
        const match = matchPath(req.path, route);
        if (match) {
            const { loadData } = route.component;
            if (loadData) {
                promises.push(loadData(store));
            }
        }
    });


    // 4.等待所有的请求结束后，再返回渲染逻辑
    Promise.all(promises).then(data => {
        // react组件解析为html
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header />
                    {routes.map(route => <Route {...route} />)}
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
                        <script>window.__context=${JSON.stringify(store.getState())}</script>
                        <script src="bundle.js"></script>
                    </body>
                </head>
            </html>
            `);
    });

});

app.listen(9000, () => {
    console.log('server is runing..')
});
