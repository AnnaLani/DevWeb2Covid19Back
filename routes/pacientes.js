const express = require("express");
const pacientes = express.Router();
const pacientesController = require('../controllers/pacienteController'); 
const cors = require('cors');

pacientes.use(cors());

pacientes.get('/', pacientesController.selecionarPacientes);

pacientes.get('/:id', pacientesController.selecionarPacientesID);

pacientes.post('/', pacientesController.cadastrarPaciente);

pacientes.patch('/:id', pacientesController.atualizarPaciente);

pacientes.delete('/', pacientesController.deletarTodosPacientes);

pacientes.delete('/:id?', pacientesController.deletarPaciente);
 
module.exports = pacientes;