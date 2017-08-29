$(document).ready(function(){

	var peopleId;

	var url = window.location.search;

	if (url.indexOf("?people_id=") !== -1) {
		peopleId = url.split("=")[1];
          //console.log("People Id from browswer pull is: " + peopleId);
	}

	$.ajax({
		url: 'http://localhost:3000/api/people/' + peopleId,
	     type: 'GET',
	     crossDomain: true,
	     dataType: 'json',
	     success: function(response){

               for(key in response){
                    var id = response["People_Id"];
                    var firstName = response["firstName"];
                    var lastName = response["lastName"];
                    if(peopleId = response["People_Id"]){
                         $("#name").html(firstName+" "+lastName);
                    }
               }
           

          }
     });

	$("#submitSales").on("submit", function() {
		event.preventDefault();

		var a = $(".metric1-input").val().trim();
     	var b = $(".metric2-input").val().trim();
     	var c = $(".metric2-input").val().trim();

     	if (isNaN(a) || isNaN(b) || isNaN(c) ){
          	return false; 
      	}

        	var sale = {
	          metric1: $(".metric1-input").val().trim(),
	          metric2: $(".metric2-input").val().trim(),
	          metric3: $(".metric3-input").val().trim(),
	         	People_Id: peopleId
          };

          $.ajax({
          	url: 'http://localhost:3000/api/sales',
               type: 'post',
               dataType: 'json',
               data: sale,
               error: function(error){
               	console.log(error);
               },
               success: function(date){
                    window.location.replace("/total_sales?people_id=" + peopleId);
               }
          //End of AJAX
          });

	//End of submit form
	});
//End of document ready
});