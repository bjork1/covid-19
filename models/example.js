module.exports = function (sequelize, DataTypes) {
  var needHelpTB = sequelize.define(need_help_tb, {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    name: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    price: DataTypes.TEXT
  });
  return needHelpTB;
};
