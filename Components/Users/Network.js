const express = require('express');
const router = express.Router();
const response = require('../../Network/Response');
const controller = require('./Controller')


router.get('/All', function (req, res){ 
    controller.AllUser()
    .then((infoDevuelta)=>{
        response.success(req, res, infoDevuelta, 200);
    })
    .catch((infoError)=>{
        response.error(req, res, errorDevuelto, 400)
    })
    
});

router.post('/Create', function (req, res){  
    console.log(req.body.User);
    //simular crear usuario
    controller.AddUser(req.body.User,"Crearme un usuario")
    .then((infoDevuelta)=>{
        response.success(req, res, infoDevuelta, 200);
    })
    .catch((errorDevuelto)=> {
        
        response.error(req, res, errorDevuelto, 400)
    })
});

module.exports = router;