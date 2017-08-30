module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
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
=======
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
>>>>>>> master

  return People;
}



// //Here you have a simple example with authentication
// module.exports = function (sequelize, DataTypes) {
// 	var User = sequelize.define("User", {
// 		username: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			unique: true,
// 			validate: {
// 				isUnique: function (value, next) {
// 					var self = this;
// 					User.find({ where: { username: value } }).then(function (user) {
// 						// reject if a different user wants to use the same username
// 						if (user && self.id !== user.id) {
// 							return next('username already in use!');
// 						}
// 						return next();
// 					}).catch(function (err) {return next(err);});
// 				}
// 			}
// 		},

// 		email: {
// 	  		type: DataTypes.STRING,
// 	  		allowNull: false,
// 	  		unique: true,
// 	  		validate: {
// 	    			isUnique: function (value, next) {
// 	      			var self = this;
// 	      			User.find({ where: { email: value } })
// 	        			.then(function (user) {
// 	          			// reject if a different user wants to use the same email
// 	          			if (user && self.id !== user.id) {
// 	            				return next('Email already in use!');
// 	          			}
// 	          			return next();
// 	        			}).catch(function (err) {
// 	          			return next(err);
// 	        			});
// 	    			}
// 	  		}
// 		},

// 		typeOfUser: {
// 	  		type: DataTypes.INTEGER,
// 	  		allowNull:true,
// 	  		defaultValue:null
// 		},

// 		country: {
// 	  		type: DataTypes.STRING,
// 	  		allowNull:true,
// 	  		defaultValue:null
// 		},

// 		birthDate:{
// 	  		type: DataTypes.DATEONLY,
// 	  		allowNull:true,
// 	  		defaultValue:null
// 		},

// 		reports: {
// 	  		type: DataTypes.INTEGER,
// 	  		defaultValue: 0
// 		},

// 		points: {
// 	  		type: DataTypes.INTEGER,
// 	  		defaultValue: 0
// 		},

// 		password: {
// 	  		type: DataTypes.STRING,
// 	  		allowNull:false
// 		},

// 		numberFotos: {
// 	  		type: DataTypes.INTEGER,
// 	  		defaultValue: 0
// 		}
// 	}, 
// 	{
// 		classMethods: {
// 			generateHash: function (password) {
// 				return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// 			},
// 			associate: function(models){
// 				User.hasMany(models.Foto,{foreignKey: "userId"});
// 			}

// 		},
// 	  	instanceMethods: {
// 	    		validPassword: function (password) {
// 	     		return bcrypt.compareSync(password, this.password);
// 	    		}
// 	  	}

// 	});
// 	return User;
// }

//now if you think, you need to compare the password from a existing user(no hashed) with the database(hashed), you need to call user.validPassword, the user is the instance

