var db = require("../models");

// Routes for people api
// =============================================================

module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/people", function(req, res) {
    db.People.findAll({
      include: [db.Sales]
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  // POST route for adding new salesperson to the DB
  app.post("/api/people", function(req, res) {
    db.People.create(req.body).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

};
