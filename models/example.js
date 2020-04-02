var sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Covid19", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    name: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    price: DataTypes.TEXT
  });
  return Example;
};
