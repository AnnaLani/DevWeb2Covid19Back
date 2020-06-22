const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = (sequelize, Sequelize) => {
    const Hospital = sequelize.define(
        'hospital',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nome: {
                type: Sequelize.STRING
            },
            descricao: {
                type: Sequelize.STRING
            }
        },
        {
            timestamps: false
        }
    )
    return Hospital;
}

