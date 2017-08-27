$(document).ready(function() {
	var queryURL = "http://localhost:3000/api/people";

	var people_id;

	$("#login-form").on("submit", function(){
		event.preventDefault();

		var employeeFirstNameInput = $(".firstName-input").val().trim();
     	var employeeLastNameInput = $(".lastName-input").val().trim(); 

     	// Don't do anything if the name fields hasn't been filled out
     	if (!employeeFirstNameInput || !employeeLastNameInput) {
     		return;
     		console.log("<><><><> inputs are submitting blank values");
     	}



     	$.ajax({
			url: queryURL, 
			dataType: 'json',
			type: 'post',
	  		data: {
	  			firstName: employeeFirstNameInput,
     			lastName: employeeLastNameInput
	  		},
	  		success: function(data){
	  			$.ajax({
	  				url: queryURL,
                    	type: 'GET',
                    	crossDomain: true,
                    	dataType: 'json',
                    	error: function(error) {
                      	//console.log('***error***:' + error);
                    	}
	  			}).done(function(response){
	  				//console.log(response); 
	  				response.forEach(function(response){
		  				for(key in response){
		  					//console.log(response);
		  				 	var isFirstName = response["firstName"];
		  				 	var isLastName  = response["lastName"];
		  				 	if(employeeFirstNameInput == isFirstName && employeeFirstNameInput == isLastName){
		  				 		people_id = response["id"]; 
		  				 		// console.log("<><><>: "+ isFirstName + " " + isLastName);
		  				 		// console.log(response["id"]);
		  				 	} 
		  				}
		  			});

	  				window.location.replace("/dashboard?people_id=" + people_id);
	  			//End done
	  			});
	  		//End success
	  		}
	  	//End ajax
     	});
    	//End submit
	});
//End document ready
 });