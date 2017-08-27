module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define("People", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });


  People.associate = function(models) {
    People.hasMany(models.Sales, {

    }); 
  };

  return People;
};
