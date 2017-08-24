module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define("Sales", {
    salesperson: DataTypes.STRING,
    metric1: DataTypes.INTEGER,
    metric2: DataTypes.INTEGER,
    metric3: DataTypes.INTEGER
  });
  return Sales;
};
