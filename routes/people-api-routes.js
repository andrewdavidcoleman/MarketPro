var db = require("../models");

// Routes for people api
// =============================================================

module.exports = function(app) {

  // GET route for getting all of the people
  app.get("/api/people", function(req, res) {
    db.People.findAll({
      include: [db.Sales]
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  // GET route for getting one of the people
  app.get("/api/people/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.People.findOne({
      where: {
        id: req.params.id
      },
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
