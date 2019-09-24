var express = require('express');
const bodyParser = require('body-parser');

const router = require('./Network/Routes');
var app = express();

//Primero de sebe llamar al bodyParse
app.use(bodyParser.json());
//app.use('/', router);
router(app);


app.listen(3000);
console.log('Estamos escuchando por el puerto 3000');

