$(document).ready(function(){

  var total = 0;


  // var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
  var queryURL = "http://localhost:3000/api/sales";

  $("#submit-person").on("click", function() {

    function newPerson() {

      event.preventDefault();

      var person = {
        firstName: $(".first-name-input").val().trim(),
        lastName: $(".last-name-input").val().trim()
      }

      $.ajax({
          url: 'http://localhost:3000/api/people',
          type: 'post',
          dataType: 'json',
          data: person,
          success: function (data) {
            console.log(data);
          }
      });
      // End newPerson function
    };

    newPerson();

  });

  $("#submit").on("click", function() {

    event.preventDefault();

    var a = $(".metric1-input").val().trim();
    var b = $(".metric2-input").val().trim();
    var c = $(".metric3-input").val().trim();

    if (isNaN(a) || isNaN(b) || isNaN(c) ){
      return false;
    } else {

      function newSale() {

        var sale = {
         metric1: $(".metric1-input").val().trim(),
         metric2: $(".metric2-input").val().trim(),
         metric3: $(".metric3-input").val().trim(),
         PersonId: $(".emp-id").val().trim()
        };

        $.ajax({
            url: 'http://localhost:3000/api/sales',
            type: 'post',
            dataType: 'json',
            data: sale,
            success: function (data) {
              console.log(data);
            }
        });

        // End newSale function
      }
      //Call the newSale Function
      newSale();
    }
    // End submit
  });
  // bottom of document ready
});
