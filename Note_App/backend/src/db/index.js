const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './notes-app',
});

/*
  This code is used to reset the database and recreate the tables when the server starts.
  Please note that this code is only for development purposes. 
  In production, you should not use this code as it will delete all the data in the database.
*/
// sequelize.sync({ force: true }).then(() => {
//   console.log('Database reset: All tables dropped and recreated');
// });

module.exports = sequelize;
