var db = require("../models");

// Routes for sales api
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/sales", function(req, res) {
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


  // POST route for adding new salesperson to the DB
  app.post("/api/sales", function(req, res) {
    db.Sales.create(req.body).then(function(dbSales) {
      res.json(dbSales);
    });
  });

};
