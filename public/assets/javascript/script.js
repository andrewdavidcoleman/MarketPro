$(document).ready(function(){

  var total = 0;
  var peopleId;
  var empId;
  var resFirst;
  var resLast;

  // var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
  var queryURL = "http://localhost:3000/api/sales";

  $("#submitSales").hide();
  $("#submitPerson").hide();


  // login functionality====================
  $("#login").on("submit", function() {
    event.preventDefault();

    var firstNameLogin = $(".first-name-login").val();
    var lastNameLogin = $(".last-name-login").val();
    empId = $(".emp-id-login").val();

    $.get("/api/people/" + empId, function(data) {
        console.log(data);
        console.log(data.firstName);
        resFirst = data.firstName;
        resLast = data.lastName;
        // this part checks to see if the employee id entered corresponds to the correct name
        if (firstNameLogin === resFirst && lastNameLogin ===resLast) {
          console.log("Oh it's you!");
          $("#login").hide();
          $("#submitSales").show();

        } else {
          console.log("NOOOOOO!");
        }

    });



    salesTotals();

  });

  function salesTotals() {
    $.get("/api/sales/" + empId, function(data) {
      console.log(data);
      var metric1Total = 0;
      var metric2Total = 0;
      var metric3Total = 0;
      for (var i = 0; i < data.length; i++) {
        metric1Total += data[i].metric1;
      }
      for (var i = 0; i < data.length; i++) {
        metric2Total += data[i].metric2;
      }
      for (var i = 0; i < data.length; i++) {
        metric3Total += data[i].metric3;
      }
      console.log(metric1Total);
      console.log(metric2Total);
      console.log(metric3Total);

      $(".metric1").html(metric1Total);
      $(".metric2").html(metric2Total);
      $(".metric3").html(metric3Total);
    })
  }

  // add new person functionality====================
  $("#submitPerson").on("submit",function() {
    event.preventDefault();
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
    $("#submitPerson").hide();
    $("#login").show();

  });



  // submit new sale functionality====================
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
         PersonId: empId
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
      salesTotals();
    }
    console.log($(".emp-id").val());
    // End submit
  });
// bottom of document ready
});
