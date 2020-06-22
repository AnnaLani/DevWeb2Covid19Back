const express = require("express");
const main = express.Router();
const cors = require('cors');

main.use(cors());

main.get('/', function(req, res){
    res.send('Você acessou a rota padrão da aplicação!');
});
main.post('/', function(req, res){
    res.send('Você acessou a rota padrão com POST!');
});
main.delete('/', function(req, res){
    res.send('Você acessou a rota padrão com POST!');
});

module.exports = main