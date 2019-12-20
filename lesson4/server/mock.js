// 单纯模拟接口
const express=require('express');
const app=express();

app.get('/api/course/list',(req,res)=>{
    // 支持跨域
    // res.header('Access-Control-Allow-Origin','*');
    // res.header('Access-Control-Methods','GET,POST,PUT,DELETE');
    // res.header('Content-Type','application/json;charset=utf-8');

    res.json({
        code:0,
        list:[
            {id:1,name:'javascript 从helloworld到放弃'},
            {id:2,name:'背锅的艺术'},
            {id:3,name:'撸丝程序员如何征服女测试'},
            {id:4,name:'python从入门到跑路'}
        ]
    });
});

app.get('/api/user/info',(req,res)=>{
    // 支持跨域
    // res.header('Access-Control-Allow-Origin','*');
    // res.header('Access-Control-Methods','GET,POST,PUT,DELETE');
    // res.header('Content-Type','application/json;charset=utf-8');

    res.json({
        code:0,
        info:{
            name:'党某某',
            honor:'首席背锅工程师'
        }
    });
});

app.listen('9001',()=>{
    console.log('mock has started..')
});