module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define("Sales", {
    metric1: DataTypes.INTEGER,
    metric2: DataTypes.INTEGER,
    metric3: DataTypes.INTEGER
  });

  Sales.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Sales.belongsTo(models.People, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Sales;
};
