const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({extended: false}));
route.use(bodyParser.json());

route.get('/', (req, res, next)=>{
    // get all list student
});

route.get('/:id', (req, res, next)=>{
    // get student by his id
});

route.get('/class/:id', (req, res, next)=>{
    // get list student by class id
});

route.post('/', (req, res, next)=>{
    // create student data
});

route.delete('/:id', (req, res, next)=>{
    // delete student
});

route.put('/', (req, res, next)=>{
    // update student
});

route.put('/picture/:id', (req, res, next)=>{
    // update picture
});
