var db = require("../models");

// Routes for sales api
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/sales", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Sales.findAll({}).then(function(dbSales) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbSales);
    });
  });

  // POST route for adding new salesperson to the DB
  app.post("/api/sales", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with the columns from the DB
    db.Sales.create({
      metric1: req.body.metric1,
      metric2: req.body.metric2,
      metric3: req.body.metric3
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });

};
