$(document).ready(function(){

  var total = 0;
  var peopleId;

  var url = window.location.search;

	if (url.indexOf("?people_id=") !== -1) {
		peopleId = url.split("=")[1];
	}

  // var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
  var queryURL = "http://localhost:3000/api/sales";

 $("#submitSales").on("submit", function() {

    event.preventDefault();

    var a = $(".metric1-input").val().trim();
    var b = $(".metric2-input").val().trim();
    var c = $(".metric2-input").val().trim();

    if (isNaN(a) || isNaN(b) || isNaN(c) ){
      return false;
    } else {

      function newSale() {

        var sale = {
         metric1: $(".metric1-input").val().trim(),
         metric2: $(".metric2-input").val().trim(),
         metric3: $(".metric3-input").val().trim(),
         PersonId: $(".emp-id").val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/sales',
            type: 'post',
            dataType: 'json',
            data: sale,
            success: function (data) {
              console.log(data);
            },
        });
        // End newSale function
      }
      //Call the newSale Function
      newSale();

      function newPerson() {

        var person = {
          firstName: $(".first-name-input").val().trim(),
          lastName: $(".last-name-input").val().trim(),
        };

        $.ajax({
            url: 'http://localhost:3000/api/people',
            type: 'post',
            dataType: 'json',
            data: person,
            success: function (data) {
              console.log(data);
            },
        });
      }

      newPerson();
    }
    console.log($(".emp-id").val());
    // End submit
  });
// bottom of document ready
});
