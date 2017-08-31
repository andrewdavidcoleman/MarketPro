var db = require("../models");

// Routes for people api
// =============================================================

module.exports = function(app) {

  // GET route for getting all of the people
  app.get("/api/people/", function(req, res) {
    db.People.findAll({
        include: [db.Sales]
    }).then(function(dbPeople) {
        res.json(dbPeople);
    });
  });

  // GET route for getting just the person with the specified id
  app.get("/api/people/:id", function(req, res) {
    db.People.findOne({
      where : {
        id: req.params.id
      },
      include: [db.Sales]
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });


  // POST route for adding new person to the DB
  app.post("/api/people", function(req, res) {
    db.People.create({
      userName: req.body.userName,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

};
