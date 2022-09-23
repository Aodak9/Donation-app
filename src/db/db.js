import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'donation',
    'postgres', 
    'Spartan.9*', 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)