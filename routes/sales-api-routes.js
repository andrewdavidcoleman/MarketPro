var db = require("../models");

// Routes for sales api
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the sales
  app.get("/api/sales", function(req, res) {
    console.log("=============", req.query);
    var query = {};
    if (req.query.people_id) {
      query.PersonId = req.query.people_id
    }
    db.Sales.findAll({
      where: query,
      include: [db.People]
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });

  app.get("/api/sales/:PersonId", function(req, res) {
    var idInt = parseInt(req.params.PersonId);
    console.log("test");
    var query = {};
    if (req.query.PersonId) {
      query.PersonId = req.query.PersonId
    }
    db.Sales.findAll({
      where: {
        PersonId: idInt
      },
      include:[db.People]
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });

  // POST route for adding new salesperson to the DB
  app.post("/api/sales", function(req, res) {
    db.Sales.create(req.body).then(function(dbSales) {
      res.json(dbSales);
    });
  });

};
