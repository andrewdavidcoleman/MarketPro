$(document).ready(function(){

  var total = 0;

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "marketpro_db"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   createProduct();
// });


// var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
var queryURL = "http://localhost:3000/api/sales";


// $.ajax({
//   url: queryURL,
//   type: 'GET',
//   crossDomain: true,
//   dataType: 'json',
//   error: function(error) {
//      console.log('***error***:' + error);
//    }
// })
// .done(function(response) {
//   // console.log(response);
// //   $(".metric1").html("<p>" + response[0].metric1 + "</p>");
// //   $(".metric2").html(response[0].metric2)
// //   $(".metric3").html(response[0].metric3)
//       Object.keys(response).forEach(function(key) {
//           var saleObj = response[key]; 
//           console.log("^^^^^^"+saleObj["salesperson"]);
//           $("#running_employee_total").append("<p>"+saleObj["salesperson"]+"</p>");
//           // $("running_employee_total").html("<p>" + saleObj[key]+ "</p>");
//           // no data is going to metric columns, test to see if input boxes are submitting a value
//           //console.log("@@@@@" + saleObj);
//       });
// });



    $("#submitSales").on("submit", function() {

      event.preventDefault();
      var employeeNameInput = $(".name-input").val().trim();
      //metric colums cannot be emplty and must be an integer or sequelize error will be thrown
      // html required checks for empty
      var a = $(".metric1-input").val().trim();
      var b = $(".metric2-input").val().trim();
      var c = $(".metric2-input").val().trim();

      if (isNaN(a) || isNaN(b) || isNaN(c) ){
        return false; 
      } else {

      function newSale() {

        var sale = {
         salesperson: $(".name-input").val().trim(),
         metric1: $(".metric1-input").val().trim(),
         metric2: $(".metric2-input").val().trim(),
         metric3: $(".metric3-input").val().trim()
        };



        $.ajax({
            url: 'http://localhost:3000/api/sales',
            type: 'post',
            dataType: 'json',
            data: sale,
            success: function (data) {
                //console.log("!!!!!!!"+data);;
            },

        });


        $.ajax({
          url: queryURL,
          type: 'GET',
          crossDomain: true,
          dataType: 'json',
          error: function(error) {
             console.log('***error***:' + error);
           }
        })
        .done(function(response) {
          //console.log(response); 
          response.forEach(function(element){
            //console.log(element);
             for(key in element){
              //console.log(key);
              //console.log(element[key]);
              // var isTom = element[key].toString().indexOf("Tom Tom");
              var isTom = element["salesperson"];
              //console.log(isTom);
              if(isTom == "Tom Tom") {
                //console.log(isTom);
                //adding the objects
                var metricsAddedValue = element["metric1"]+ element["metric2"]+element["metric3"];
                //combine
                //console.log(metricsAddedValue);
                total += parseInt(metricsAddedValue);
              }


             }
          });
                     $("#running_employee_total").append("<p>"+total+"</p>");
                     //console.log(total);

        //   $(".metric1").html("<p>" + response[0].metric1 + "</p>");
        //   $(".metric2").html(response[0].metric2)
        //   $(".metric3").html(response[0].metric3)
              Object.keys(response).forEach(function(key) {
                  var saleObj = response[key]; 
                  //console.log("^^^^^^"+saleObj);

                  //$("#running_employee_total").append("<p>"+saleObj["metric1"]+"</p>");

                  //>>>Not Working
                  // for (var i = 0; i < saleObj["salesperson"].length; i++){
                  //   if (employeeNameInput == saleObj["salesperson"][i] ){
                  //     console.log("()()()()()"+saleObj["salesperson"][i]);
                  //     //$("#running_employee_total").append("<p>"+saleObj[i]["salesperson"]+"</p>");
                  //   }
                  // }

              });

        //end ajax loop
        });


      // End newSale function
      }
      //Call the newSale Function
      newSale();
      //End isNaN
      

      // function grabSales(){
      //   var query = connection.query(
      //     "SELECT SUM(metric1 + metric2 + metric3) FROM sales WHERE salesperson = " + employeeNameInput+,
      //     function(err, res) {
      //     console.log(res);
      //   }
      // );

        // grabSales();
      }
    // End submit
    });

// bottom of document ready
});





