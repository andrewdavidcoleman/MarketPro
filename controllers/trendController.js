var express = require("express");

var router = express.Router();

// Import the model (trends.js) to use its database functions.
var trend = require("../trends.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  trend.all(function(data) {
    var hbsObject = {
      craft_beer: data
    };

      // Object.keys(hbsObject).forEach(function(key) {
      //     // do something with key...
      //     //console.log(hbsObject[key]);
      //     res.render("index", hbsObject[key]);
      // });
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  trend.create([
    "query","value"
  ], [
    req.body.query, req.body.value
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  trend.update({
    query: req.body.query,
    value: req.body.value
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  trend.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
