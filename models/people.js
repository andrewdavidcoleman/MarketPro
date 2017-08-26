module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define("People", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });
  return People;
};
