import React,{useState} from 'react';
import {Route} from 'react-router-dom';

import Index from './container/Index';
import About from './container/About';

export default (
    <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
    </div>
);
