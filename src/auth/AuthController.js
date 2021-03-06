const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const admin_model = require('../../model/admin');
const user_model  = require('../../model/account');

route.post('/login', (req, res, _)=>{
    let username = req.body.username, password = req.body.password;
    user_model.Auth(username, password, (result)=>{
        if(result.status === 0){
            return res.status(401).send({auth: false, message: result.err, token: null});
        }
        else if(result.status === -1){
            return res.status(500).send({auth: false, message: result.err, token: null});
        }
        else{
            let token = jwt.sign({id: result.data.id, owner: result.data.ownid, level: result.data.level}, config.secret, {});
            return res.status(200).send({auth: true, message:null, token: token});
        }
    });
});

route.post('/admin/login', (req, res, _)=>{
    let username = req.body.username, password = req.body.password;
    admin_model.Auth(username, password, (result)=>{
        if(result.status === 0){
            return res.status(401).send({auth: false, message: result.err});
        }else if(result.status === -1){
            return res.status(500).send({auth: false, message: result.err});
        }else{
            let token = jwt.sign({id: result.data.id, owner: result.data.id, level: 3}, config.secret, {});
            return res.status(200).send({auth: true, token: token});
        }
    });
});

route.post('/check', (req, res) => {
    let token = req.headers['x-access-token'];
    if(!token) return res.status(403).send({auth: false, message: 'No token provided.'});

    jwt.verify(token, config.secret, (err, _)=>{
        if(err) {
            return res.status(401).send({auth: false, message: 'Failed to authenticate token.'});
        }else{
            return res.status(200).send({auth: true, message: ''});
        }
    });
});

route.get('/logout', (_, res)=>{
    res.status(200).send({auth: false, token: null});
});

module.exports = route;
