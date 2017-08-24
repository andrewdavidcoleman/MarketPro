var mysql = require("mysql");
var googleTrends = require('google-trends-api');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "related_queries_db"
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId + "\n");
  top5Queries();
  top5Cities();
});

function top5Queries(){
	var query = connection.query(
		"SELECT query, value from craft_beer ORDER BY value DESC LIMIT 5 ",
		function(err, res){
			if(err) throw err;
			Object.keys(res).forEach(function(key) {
				var showResults = res[key];
				console.log(showResults["query"] + " " + showResults["value"] + "\n");
			});
		}
	);
}

function top5Cities(){
	var query = connection.query(
		// DISCTINT removes duplicates from search query
		"SELECT DISTINCT city, value from craft_beer_cities ORDER BY value DESC LIMIT 5 ",
		function(err, res){
			if(err) throw err;
			Object.keys(res).forEach(function(key) {
				var showResults = res[key];
				console.log(showResults["city"] + " " + showResults["value"] + "\n");
			});
		}
	);
}
