const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = route;