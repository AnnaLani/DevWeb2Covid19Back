const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define(
        'paciente',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nome: {
                type: Sequelize.STRING
            },
            altura: {
                type: Sequelize.DOUBLE
            },
            peso: {
                type: Sequelize.DOUBLE
            },
            telefone: {
                type: Sequelize.VARCHAR
            },
            saude: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            }
        },
        {
            timestamps: false
        }
    )
    return Paciente;
}

