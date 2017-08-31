var db = require("../models");

// Routes for sales api
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the people
  app.get("/api/sales", function(req, res) {

    db.Sales.findAll({
      include:[db.People]
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });

  // GET route for getting all the people with the specified id
  app.get("/api/sales/:People_Id", function(req, res) {
    db.Sales.findAll({
      where : {
        People_Id: req.params.People_Id
      },
      include: [db.People]
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });

  // POST route for adding new salesperson to the DB
  app.post("/api/sales", function(req, res) {
    db.Sales.create({
      metric1: req.body.metric1,
      metric2: req.body.metric2,
      metric3: req.body.metric3,
      People_Id: req.body.People_Id
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });

};
