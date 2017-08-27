$(document).ready(function(){

	var peopleId;

	var employeeNameDIV = $("#name");

	var url = window.location.search;

	if (url.indexOf("?people_id=") !== -1) {
		peopleId = url.split("=")[1];
	}

	$.ajax({
		url: 'http://localhost:3000/api/people',
	     type: 'GET',
	     crossDomain: true,
	     dataType: 'json',
	     success: function(response){
     	  	response.forEach(function(data){
     	  		for(key in data){
     	  			var id = data["id"];
     	  			var firstName = data["firstName"];
     	  			var lastName = data["lastName"];
     	  			//console.log(id);
     	  			if(peopleId = data["id"]){
     	  				$("#name").html(firstName+" "+lastName);
     	  			}
     	  		}
     	  	});

	     }
	});

	$("#submitSales").on("submit", function() {
		event.preventDefault();

		var a = $(".metric1-input").val().trim();
     	var b = $(".metric2-input").val().trim();
     	var c = $(".metric2-input").val().trim();

     	if (isNaN(a) || isNaN(b) || isNaN(c) ){
          	return false; 
      	} else {
	        	var sale = {
	          // salesperson: $(".name-input").val().trim(),
		          metric1: $(".metric1-input").val().trim(),
		          metric2: $(".metric2-input").val().trim(),
		          metric3: $(".metric3-input").val().trim(),
		          personId: peopleId,
		          PersonId: peopleId,
		          personid: peopleId,
		          Person: peopleId
	          };

	          $.ajax({
	          	url: 'http://localhost:3000/api/sales',
	               type: 'post',
	               dataType: 'json',
	               data: sale,
	               error: function(error){
	               	console.log(error);
	               }
	          })
	          .done(function(data){
	          	//console.log(typeof data);
	          	Object.keys(data).forEach(function(key) {
	          		var showResults = data[key];
	          		console.log(showResults[""]);
	          		//console.log(showResults["metric1"] + " " + showResults["PersonId"] + "\n");
	          		// for(key in element){
	          		// 	var m1 = element["metric1"];
	          		// 	var m2 = element["metric2"];
	          		// 	var m3 = element["metric3"];
	          		// 	var PID = element["PersonId"];
	          		// }
	          	});
	          });
	          // });
	               // $.ajax({
	               //      url: queryURL,
	               //      type: 'GET',
	               //      crossDomain: true,
	               //      dataType: 'json',
	               //      error: function(error) {
	               //        //console.log('***error***:' + error);
	               //      }
	               // }).done(function(response) {

	          //End of AJAX
	      	// });
	     //End of if statement
	     }
	//End of submit form
	});
//End of document ready
});