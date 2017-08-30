var db = require("../models");

// Routes for people api
// =============================================================

module.exports = function(app) {

  // GET route for getting all of the
  app.get("/api/people/", function(req, res) {
    db.People.findAll({
        include: [db.Sales]
    }).then(function(dbPeople) {
        res.json(dbPeople);
    });
  });

  app.get("/api/people/:People_Id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.People.findOne({
      where : {
        People_Id: req.params.People_Id
      },
      include: [db.Sales]
    }).then(function(dbPeople) {
      // We have access to the todos as an argument inside of the callback function
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
