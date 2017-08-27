module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define("Sales", {
    metric1: DataTypes.INTEGER,
    metric2: DataTypes.INTEGER,
    metric3: DataTypes.INTEGER
  });

  Sales.associate = function(models){
  	Sales.belongsTo(models.People, 
    {
  		foreignKey: {
  			allowNull: false
  		},
      constraints: true, 
      foreignKeyConstraint:true  
  	});
  }
  return Sales;
};
