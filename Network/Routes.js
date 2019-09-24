
const express = require('express');
const Users =  require('../Components/Users/Network')
const Clients =  require('../Components/Clients/Network')

const routes = function(app){
    app.use('/Users',Users);
    app.use('/Clients',Clients);
}

module.exports = routes;
