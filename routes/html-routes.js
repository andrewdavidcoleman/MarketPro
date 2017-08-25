// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route leads to landing page with salesperson selection
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  //dashboard leads to sales tracker page
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

};