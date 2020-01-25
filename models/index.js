'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (process.env.JAWSDB_URL || config.use_env_variable) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL || process.env[config.use_env_variable], {
    host: "q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "g6vtr9qhmrowf87f",
    password: "a8qz8jkicvu4h4cb",
    database: "tef98qaf23cepnsn"
  });
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;