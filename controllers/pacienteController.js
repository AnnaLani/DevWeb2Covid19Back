const db = require('../database/db');
const Pacientes = db.pacientes;
const Operator = db.Sequelize.Op;

exports.cadastrarPaciente = (req, res) => {
    if(!req.body.nome || !req.body.email || !req.body.data_internacao){
        res.status(400).send({
            message: "Dados dos pacientes não podem ser nulos"
        });
        return;
    }
    const paciente = {
        nome: req.body.nome,
        altura: req.body.altura,
        peso: req.body.peso,
        telefone: req.body.telefone,
        saude: req.body.saude,
        email: req.body.email
    }
    Pacientes.create(paciente)
        .then(data =>
            {                
                res.send(data);
            })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu algum erro!"
            })
        })
}

exports.selecionarPacientes = (req, res) => {
    const nome = req.body.nome;
    let cond;

    if(nome != null){
        cond = { nome: {[Op.like]: `%${nome}%`}}
    }else{
        cond = null;
    }

    Pacientes.findAll({where: cond})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu algum erro ao recuperar os pacientes!"
            })
        })
}

exports.selecionarPacienteID = (req, res) => {
    const id = req.body.id;

    Pacientes.findByPk(id)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Ocorreu um erro ao recuperar o paciente de id ${id}`
        })
    })
}

exports.atualizarPaciente = (req, res) => {
    const id = req.body.id;

    Pacientes.update(req.body, { where : {id : id}})
    .then( num_Linhas => {
        if(num_Linhas == 1){
            res.send({
                message: "Paciente atualizado com sucesso!"
            })
        }else{
            res.send({
                message: `Não foi possível encontrar o paciente de id ${id}`
            })
        }        
    })
    .catch(err =>{
        res.send({
            message: err.message || `Ocorreu um erro ao atualizar o paciente de id ${id}`
        })
    })
}

exports.deletarPaciente = (req, res) => {
    const id = req.body.id;

    Pacientes.destroy({where : {id :id}})
        .then(num_Linhas =>{
            if(num_Linhas == 1){
                res.send({
                    message: "Paciente deletado com sucesso!"
                })
            }else{
                res.send({
                    message: `Não foi possível deletar o paciente de id ${id}`
                })
            }
        })
        .catch(err =>{
            res.send({
                message: err.message || `Ocorreu um erro ao deletar o paciente de id ${id}`
            })
        })
}

exports.deletarTodosPacientes = (req, res) => {
    Pacientes.destroy({
        where: {},
        truncate: false
    })
    .then(num_Linhas =>{
        res.send({
            message: `${num_Linhas} pacientes deletados com sucesso!`
        })
    })
    .catch(err =>{
        res.send({
            message: err.message || `Ocorreu um erro ao deletar o paciente de id ${id}`
        })
    })
}