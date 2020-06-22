const express = require("express");
const hospitais = express.Router();
const cors = require('cors');

hospitais.use(cors());

hospitais.get('/', function(req, res){
    res.send('Voçê acessou HOSPITAIS!');
});

module.exports = hospitais