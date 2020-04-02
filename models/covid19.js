module.exports = function (sequelize, DataTypes) {
  var needHelpTB = sequelize.define(need_help_tb, {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return needHelpTB;
};
