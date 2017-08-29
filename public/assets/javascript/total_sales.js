$(document).ready(function(){

	var peopleId;

	var url = window.location.search;

	if (url.indexOf("?people_id=") !== -1) {
		peopleId = url.split("=")[1];
          //console.log("People Id from browswer pull is: " + peopleId);
	}

	$.ajax({
		url: 'http://localhost:3000/api/sales/' + peopleId,
	     type: 'GET',
	     crossDomain: true,
	     dataType: 'json',
          error: function(error){
               console.log(error);
          },
	     success: function(response){
               var test = response;
               Object.keys(test).forEach(function(key) {
                    var test2 = test[key];
                    var m1 = test2["metric1"];
                    var m2 = test2["metric2"];
                    var m3 = test2["metric3"];
                    var total = m1+m2+m3;

                    $("#running_employee_total").html(
                         "Your total is: " + " " +
                         "Metric 1: " + m1 + " " +
                         "Metric 2: " + m2 + " " +
                         "Metric 3: " + m3 + " = " + total
                    );
               });
        
          }
     });

	
//End of document ready
});