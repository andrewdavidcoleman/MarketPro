module.exports = function(sequelize, DataTypes) {

	var People = sequelize.define("People", {
		userName:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isUnique: function (value, next) {
					var self = this;
					User.find({ where: { username: value } }).then(function (user) {
						// reject if a different user wants to use the same username
						if (user && self.id !== user.id) {
							return next('username already in use!');
						}
						return next();
					}).catch(function (err) {return next(err);});
				}
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
			allowNull: false
		}


	},
	{
		classMethods: {
			generateHash: function (password) {
				return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
			}

		},
	  	instanceMethods: {
	    		validPassword: function (password) {
	     		return bcrypt.compareSync(password, this.password);
	    		}
	  	}

	});

  People.associate = function(models) {
    // People.hasMany(models.Sales, {onDelete: "cascade"});
    models.People.hasMany(models.Sales, { foreignKey: 'People_Id'});
  }

  return People;
}
