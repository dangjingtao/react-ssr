import React from 'react';
import ReacDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from '../src/store/store';

import App from '../src/App';

const Page=(<Provider store={store}>
    <BrowserRouter>{App}</BrowserRouter>
</Provider>);

// 客户端
// 注水：不需render
ReacDom.hydrate(Page,document.querySelector('#root'));

