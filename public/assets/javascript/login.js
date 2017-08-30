$(document).ready(function() {
	var queryURL = "http://localhost:3000/api/people";

	var people_id;

	// $("#new-user-form").hide()

	$("#login-form").on("submit", function(){
		event.preventDefault();

		var employeeUsernameInput = $(".username-input").val().trim();
     	var employeePasswordInput = $(".password-input").val().trim();

     	if (!employeeUsernameInput || !employeePasswordInput) {
     		return;
     		console.log("<><><><> inputs are submitting blank values");
     	}


	  	$.ajax({
	  		url: queryURL,
	  		dataType: "json",
	  		type: "get",
	  		crossDomain: true,
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
	  	//End ajax
     	});
    	//End submit
	});

	// $(".new-user-button").on("click", function(){
	// 	$("#new-user-form").show()
	// });

//End document ready
 });
