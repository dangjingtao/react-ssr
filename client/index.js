import React from 'react';
import ReacDom from 'react-dom';
import App from '../src/App';

// 客户端
// 注水：不需render
ReacDom.hydrate(App,document.querySelector('#root'));

