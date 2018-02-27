'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    title: DataTypes.STRING,
    score: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};