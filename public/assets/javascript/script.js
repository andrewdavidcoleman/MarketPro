$(document).ready(function(){

  var total = 0;


// var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
var queryURL = "http://localhost:3000/api/sales";

 $("#submitSales").on("submit", function() {


  event.preventDefault()


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
              if(isTom == employeeNameInput ) {
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


        //end ajax loop
        });


      // End newSale function
      }
      //Call the newSale Function
      newSale();
      }
    // End submit
    });
// bottom of document ready
});





