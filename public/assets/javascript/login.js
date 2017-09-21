"use strict";
$(document).ready(function() {

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



     	//verify passwords match
     	if( addPasswordInput !== confirmAddPasswordInput) {
     		$('#messages').html("Passwords do not match");
     		return false;

     	} else {

     		$.post("/api/people", newUser, function(res) {
     			$('#add-user-form').addClass('hide');
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


//End document ready
 });
