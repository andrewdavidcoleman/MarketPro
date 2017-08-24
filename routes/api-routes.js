var db = require("../models");

// Routes
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
      salesperson: req.body.salesperson,
      metric1: 0,
      metric2: 0,
      metric3: 0
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });


// =======DELETE and PUT are not part of requirements but we can activate these features if we have extra time========



//   // DELETE route for deleting todos. We can get the id of the todo to be deleted from
//   // req.params.id
//   app.delete("/api/sales/:id", function(req, res) {
//     // We just have to specify which todo we want to destroy with "where"
//     db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });
//
//   });
//
//   // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/sales", function(req, res) {
//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.Todo.update({
//       metric1: +=req.body.metric1,
//       metric2: +=req.body.metric2,
//       metric3: +=req.body.metric3
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });
//   });
//
// };
