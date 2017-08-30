$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
	console.log("letsago");
=======

>>>>>>> master
=======
	console.log("letsago");
>>>>>>> 9b346b222c9d26063c5f79e3fb93912f60c3e910
	// var queryURL = "http://localhost:3000/api/people";
	var queryURL = "https://market-pro-2017.herokuapp.com/api/people"

	var people_id;


	$('#addUser').on("click",function(){
		$('#add-user-form').removeClass('hide');
	});
	//*****************************Create Account********************************************
	$("#add-user-form").on("submit", function(){
		event.preventDefault();

		var addfirstNameInput = $("#add-firstName").val().trim();
		var addLastNameInput = $("#add-lastName").val().trim();
		var addUsernameInput = $("#add-userName").val().trim();
     	var addPasswordInput = $("#add-password").val().trim();
     	var confirmAddPasswordInput = $("#confirm-password").val().trim();

     	var newUser = {
     		userName: addUsernameInput,
     		password: addPasswordInput,
     		firstName:addfirstNameInput,
     		lastName: addLastNameInput,
     	};

     	function checkForLetters(inputtxt){
     		var letters = /^[A-Za-z]+$/;
     		if(inputtxt.match(letters)){
     			return true;
     		} else {
     			$("#messages").html("first and last name must contain letters only");
     			return false;
     		}
	  	}

     	//verify length for password
     	for (var i =0; i < addPasswordInput.length;  i++){
     		if ( addPasswordInput[i] < 6 || addPasswordInput[i] > 20){
     			$("#messages").html("Password must be between 6 and 20 characters");
     			return false;
     		}
     	}

     	//verify length for username
     	for (var i =0; i < addUsernameInput.length;  i++){
     		if ( addUsernameInput[i] < 6 || addUsernameInput[i] > 20){
     			$("#messages").html("Username must be between 6 and 15 characters");
     			return false;
     		}
     	}

     	//verify length for first name
     	for (var i =0; i < addfirstNameInput.length;  i++){
     		if ( addfirstNameInput[i] < 3 || addfirstNameInput[i] > 20){
     			$("#messages").html("First Name must be between 3 and 12 characters ");
     			return false;
     		}

     		checkForLetters(addfirstNameInput);
     	}

     	//verify length for last name
     	for (var i =0; i < addLastNameInput.length;  i++){
     		if ( addLastNameInput[i] < 6 || addLastNameInput[i] > 20){
     			$("#messages").html("Last name must be between 6 and 20 characts");
     			return false;
     		}

     		checkForLetters(addLastNameInput);
     	}


     	//verify passwords match
     	if( addPasswordInput !== confirmAddPasswordInput) {
     		$('#messages').html("Passwords do not match");
     		return false;

     	} else {
     		$.get(queryURL, function(data){
     			for (key in data){
     				for ( var i =0; i<data.length; i++){
     					if ( addUsernameInput == data[i].userName ){
     						$("#messages").html("Username already exists.");
     						return false;
     					} else {
     						$.post("/api/people", newUser, function() {
									console.log("Added: " + newUser);
								});
     					}
     				}
     			}
     		});
     	}

	});





	//*****************************Login User************************************************
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
	  					var people_id = element["id"];
	  					if (  dbUsername === employeeUsernameInput && dbPassword === employeePasswordInput ){
	  						window.location.replace("/dashboard?people_id=" + people_id);
	  					}
	  				}
	  			});
	  	//End ajax
     	});
    	//***********************End submit of login form*********************************************************
	});

	// $(".new-user-button").on("click", function(){
	// 	$("#new-user-form").show()
	// });

//End document ready
 });
