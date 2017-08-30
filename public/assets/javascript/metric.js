$(document).ready(function(){

	var peopleId;

	var url = window.location.search;

	if (url.indexOf("?people_id=") !== -1) {
		peopleId = url.split("=")[1];
          //console.log("People Id from browswer pull is: " + peopleId);
	}

     $.get("api/people/"+ peopleId, function(data){
          var firstName = "";
          var lastName = "";

          for (key in data ){
               firstName = data["firstName"];
               lastName = data["lastName"];
               $('#employeeName').html(firstName + " " + lastName);
          }

     });

 //     //===============================================================
     //===============================================================
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
               success: function(){
                    //window.location.replace("/total_sales?people_id=" + peopleId);

                    $.get("api/sales/"+ peopleId, function(data){
                         var m1 = 0;
                         var m2 = 0;
                         var m3 = 0;

                         for ( var i = 0; i < data.length; i++ ){
                              m1 += data[i].metric1;
                         }
                         for ( var i = 0; i < data.length; i++ ){
                              m2 += data[i].metric2;
                         }                         
                         for ( var i = 0; i < data.length; i++ ){
                              m3 += data[i].metric3;
                         }
                         
                         // $("#employee-total").html(
                         //      "Total for Metric1: " + m1 + "\n" +
                         //      "Total for Metric1: " + m2 + "\n" +
                         //      "Total for Metric1: " + m3
                         // );

                         $('#m1').html(m1);
                         $('#m2').html(m2);
                         $('#m3').html(m3);

                    });
               }
          //End of AJAX
          });

	//End of submit form
	});

     $("#logout").on("click", function(){
          window.location.replace("/");
     })
//End of document ready
});
