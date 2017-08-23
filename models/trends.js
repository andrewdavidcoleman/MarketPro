// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var trend = {
  all: function(cb) {
    orm.all("craft_beer", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("craft_beer", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("craft_beer", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("craft_beer", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (trendController.js).
module.exports = trend;
