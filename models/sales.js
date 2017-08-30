module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define("Sales", {
    metric1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    metric2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      metric3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });

Sales.associate = function(models) {

    models.Sales.belongsTo(models.People, { foreignKey: 'People_Id'} );
  }


  return Sales;
}
