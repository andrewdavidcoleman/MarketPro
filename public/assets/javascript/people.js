$(document).ready(function(){
	var queryURL = "http://localhost:3000/api/people";
	$("#submitSales").on("submit", function() {
	 	event.preventDefault();
	 	var employeeFirstNameInput = $(".firstName-input").val().trim();
     	var employeeLastNameInput = $(".lastName-input").val().trim(); 


		$.ajax({
			url: queryURL, 
			dataType: 'json',
			type: 'post',
	  		data: {
	  			firstName: employeeFirstNameInput,
     			lastName: employeeLastNameInput
	  		},
	  		error: function(error){
	  			console.log(error);
	  		}
		});

  
     //End submit
     });
//End document Ready
});