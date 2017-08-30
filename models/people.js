module.exports = function(sequelize, DataTypes) {

	var People = sequelize.define("People", {
		userName:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        			len: [1]
      		}

		},

		password: {
	  		type: DataTypes.STRING,
	  		allowNull:false
		},

		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
      		validate: {
        		len: [1]
      		}
		},

		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
      		validate: {
        		len: [1]
      		}
		},

		People_Id: {
			type: DataTypes.INTEGER,
			// allowNull: false
		}


	});

  People.associate = function(models) {
    // People.hasMany(models.Sales, {onDelete: "cascade"});
    models.People.hasMany(models.Sales, {
			foreignKey: 'People_Id',
			onDelete: "cascade"
		});
  }

  return People;
}
