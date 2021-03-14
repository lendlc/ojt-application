const Sequelize = require('sequelize');

//Sequelize is an ORM using MySQL, Something similar like MongoDB and Mongoose
const sequelize = new Sequelize('inventory', "root", "", {
    dialect: "mysql",
    logging: false  
})

module.exports = sequelize;