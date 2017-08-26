var mysql = require("mysql");
var googleTrends = require('google-trends-api');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "related_queries_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  insertQuery();
  insertCity();
});

function insertQuery(){
  googleTrends.relatedQueries({keyword: 'craft beer'})
  .then((res) => {
    	var test = JSON.parse(res);
    	var ranked = test.default.rankedList;

      // ranked.forEach(function(keyword) {
      //     Object.keys(keyword).forEach(function(key) {
      //         // do something with key...
      //         //console.log(ranked);
      //     });
      // });

    	var rankedKeywordOne = ranked[0]; //Rest of object is the same info just formatted differently

      Object.keys(rankedKeywordOne).forEach(function(key) {
     		var arrayOne = rankedKeywordOne[key];
     		Object.keys(arrayOne).forEach(function(key) {
     			var key1 = arrayOne[key];
          var query = connection.query(
            "INSERT INTO craft_beer SET ?",
            {
              query: key1["query"],
              value: key1["value"]
            },
            function(err, res) {
              console.log(res.affectedRows + " related queries and values inserted!\n");
            }
          );
     			//console.log(key1["query"]);
          //console.log(key1["value"]);
    		});
    	});

  })
  .catch((err) => {
    console.log(err);
  });
// End function
}


/*
	Google trends does not allow to leave the search field blank to just search for the top queries.

	Sells data in a company only shows what a customer bought from the company, not what they
	searched online to buy later at another store.
*/

// googleTrends.interestOverTime({keyword: 'i7-7700k'})
// .then((res) => {
//   	//console.log(res);
//   	var test = JSON.parse(res);
// })
// .catch((err) => {
//   console.log(err);
// });

function insertCity(){
  googleTrends.interestByRegion({keyword: 'craft beer', startTime: new Date('2017-08-01'), endTime: new Date('2017-02-06'), geo: 'US', resolution: 'CITY'})
  .then((res) => {
    //console.log(res);
    var test = JSON.parse(res);
    var ranked = test.default.geoMapData;
    //console.log(ranked);
    Object.keys(ranked).forEach(function(key) {
        // do something with key...
        var arrayRemoved = ranked;
        //console.log(arrayRemoved);
        Object.keys(arrayRemoved).forEach(function(key) {
          var keyValue = arrayRemoved[key];
          //console.log(keyValue["geoName"]);
          //console.log(keyValue["value"]);
          var bracketsRemoved = keyValue["value"];
          bracketsRemoved.forEach(function(value){
            console.log(keyValue["geoName"]);
            var query = connection.query(
              "INSERT INTO craft_beer_cities SET ?",
              {
                city: keyValue["geoName"],
                value: value
              },
              function(err, res) {
                console.log(res.affectedRows + " city queries and values inserted!\n");
              }
            );
          });
        });
    });
  }).catch((err) => {
    console.log(err);
  });
}
