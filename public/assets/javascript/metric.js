$(document).ready(function(){

	var peopleId;

	var url = window.location.search;

	if (url.indexOf("?people_id=") !== -1) {
		peopleId = url.split("=")[1];
          //console.log("People Id from browswer pull is: " + peopleId);
	}

	$.get("api/sales/"+ peopleId, function(data){
		console.log(data);

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

		$("#name").html(data[0].Person.firstName + " " + data[0].Person.lastName);
		$(".metric1").html(m1);
		$(".metric2").html(m2);
		$(".metric3").html(m3);
  });

  //===============================================================
	$("#submitSales").on("submit", function() {
		event.preventDefault();

		var a = $(".metric1-input").val().trim();
    var b = $(".metric2-input").val().trim();
    var c = $(".metric3-input").val().trim();

   	if (isNaN(a) || isNaN(b) || isNaN(c) ){
    	return false;
  	}

  	var sale = {
      metric1: a,
      metric2: b,
      metric3: c,
     	People_Id: peopleId
    };

			$.post("/api/sales", sale, function(){
      	$.get("api/sales/"+ peopleId, function(data){
					console.log(data);
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

					$(".metric1").html(m1);
					$(".metric2").html(m2);
					$(".metric3").html(m3);

        });
			// }
      //End of AJAX
    });

		//End of submit form
	});

     $("#logout").on("click", function(){
          window.location.replace("/");
     })
//End of document ready
});
