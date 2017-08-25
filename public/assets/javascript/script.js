console.log("letsago");

// var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
var queryURL = "http://localhost:3000/api/sales";

$.ajax({
  url: queryURL,
  type: 'GET',
  crossDomain: true,
  dataType: 'json',
  error: function(error) {
     console.log('Failed!');
     console.log(error);
   }
})
.done(function(response) {
  console.log(response);
  $(".metric1").html("<p>" + response[0].metric1 + "</p>");
  $(".metric2").html(response[0].metric2)
  $(".metric3").html(response[0].metric3)
});

$(".metric1").html()
