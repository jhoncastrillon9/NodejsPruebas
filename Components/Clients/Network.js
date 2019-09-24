const express = require('express');
const bodyParser = require('body-parser');
const response = require('../../Network/Response');
const router = express.Router();

router.get('/All', function (req, res){ 
    response.success(req, res, "consulta de todos los clientes", 200);
});

router.post('/Create', function (req, res){  
    console.log(req.body);
    res.send('Crear cliente');
});

module.exports = router;




