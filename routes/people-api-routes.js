var db = require("../models");

// Routes for people api
// =============================================================

module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/people", function(req, res) {
    db.People.findAll({}).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  // POST route for adding new salesperson to the DB
  app.post("/api/people", function(req, res) {

    db.People.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

};
