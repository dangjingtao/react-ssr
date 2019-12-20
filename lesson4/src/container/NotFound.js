import React from 'react';
import { Route } from 'react-router-dom';

function Status({ code, children }) {
    return <Route render={(props) => {
        const { staticContext } = props;
        if (staticContext) {
            staticContext.statusCode = code;
        }
        return children;
    }} />
}

function NotFound(props) {
    // props.staticContext
    // 给staticContext赋值 statusCode=404
    return <Status code={404}>
        <h1>404 你来到了没有知识的星球..</h1>
        <img id="notFound" src="404.jpeg" />
    </Status>
}

export default NotFound;