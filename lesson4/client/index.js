import React from 'react';
import ReacDom from 'react-dom';
import { BrowserRouter, Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import {getClientStore} from '../src/store/store';
import {Route} from 'react-router-dom';
import routes from '../src/App';
import Header from '../src/component/Header';

const Page = (<Provider store={getClientStore()}>
    <BrowserRouter>
        <Header/>
        <Switch>
            {routes.map(route => <Route {...route} />)}
        </Switch>
    </BrowserRouter>
</Provider>);

// 客户端
// 注水：不需render
ReacDom.hydrate(Page, document.querySelector('#root'));

