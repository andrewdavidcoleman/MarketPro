module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define("People", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });

  People.associate = function(models) {
    // Associating People with Sales
    // When an Person is deleted, also delete any associated Sales
    People.hasMany(models.Sales, {
      onDelete: "cascade"
    });
  };

  return People;
};
