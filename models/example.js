module.exports = function (sequelize, DataTypes) {
  var needHelpTB = sequelize.define("need_help_tb", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    price: DataTypes.STRING
  });
  return needHelpTB;
};
