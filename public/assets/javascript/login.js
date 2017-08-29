$(document).ready(function() {
	var queryURL = "http://localhost:3000/api/people";

	var people_id;

	$("#login-form").on("submit", function(){
		event.preventDefault();

		var employeeUsernameInput = $(".username-input").val().trim();
     	var employeePasswordInput = $(".password-input").val().trim(); 

     	// Don't do anything if the name fields hasn't been filled out
     	if (!employeeUsernameInput || !employeePasswordInput) {
     		return;
     		console.log("<><><><> inputs are submitting blank values");
     	}

     	// if(employeeUsernameInput == "loginfailed"){
     	// 	people_id = 1;
     	// }


   //   	$.ajax({
			// url: queryURL, 
			// dataType: 'json',
			// type: 'post',
	  // 		data: {
	  // 		firstName: employeeFirstNameInput,
   //   			lastName: employeeLastNameInput
	  // 		},
	  // 		success: function(data){
	  // 			$.ajax({
	  // 				url: queryURL,
   //                  	type: 'GET',
   //                  	crossDomain: true,
   //                  	dataType: 'json',
   //                  	error: function(error) {
   //                    	//console.log('***error***:' + error);
   //                  	}
	  // 			}).done(function(response){
	  // 				//console.log(response); 
	  // 				response.forEach(function(response){
		 //  				for(key in response){
		 //  					//console.log(response);
		 //  				 	var isFirstName = response["firstName"];
		 //  				 	var isLastName  = response["lastName"];
		 //  				 	if(employeeFirstNameInput == isFirstName && employeeFirstNameInput == isLastName){
		 //  				 		people_id = response["id"]; 
		 //  				 		// console.log("<><><>: "+ isFirstName + " " + isLastName);
		 //  				 		// console.log(response["id"]);
		 //  				 	} 
		 //  				}
		 //  			});

	  // 				window.location.replace("/dashboard?people_id=" + people_id);
	  // 			//End done
	  // 			});
	  // 		//End success
	  // 		}


	  	$.ajax({
	  		url: queryURL,
	  		dataType: "json",
	  		type: "get",
	  		crossDomain: true,
	  		// data: {
	  		// 	userName: employeeUsernameInput,
	  		// 	password: employeePasswordInput
	  		// },
	  		error: function(error){
	  			console.log(error);
	  			}
	  		}).done(function(response){
	  			response.forEach(function(element){
	  				for( key in element){
	  					var dbUsername = element["userName"];
	  					var dbPassword = element["password"];
	  					var people_id = element["People_Id"];
	  					if (  dbUsername === employeeUsernameInput && dbPassword === employeePasswordInput ){
	  						window.location.replace("/dashboard?people_id=" + people_id);
	  					}
	  				}
	  			});
	  		//window.location.replace("/dashboard?people_id=" + people_id);
	  	//End ajax
     	});
    	//End submit
	});
//End document ready
 });