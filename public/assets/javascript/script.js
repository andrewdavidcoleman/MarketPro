console.log("letsago");

// var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";
var queryURL = "http://localhost:3000/api/sales";

$.ajax({
  url: queryURL,
  type: 'GET',
  crossDomain: true,
  dataType: 'json',
  error: function(error) {
     console.log('***error***:' + error);
   }
})
.done(function(response) {
  console.log(response);
  $(".metric1").html("<p>" + response[0].metric1 + "</p>");
  $(".metric2").html(response[0].metric2)
  $(".metric3").html(response[0].metric3)
});

$(".submit").click(function() {

  event.preventDefault()

  function newSale() {
    var sale = {
     salesperson: $(".name-input").val(),
     metric1: $(".metric1-input").val(),
     metric2: $(".metric2-input").val(),
     metric3: $(".metric3-input").val()
    };

    $.ajax({
        url: 'http://localhost:3000/api/sales',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            console.log(data.msg);;
        },
        data: sale
    });
  }

  newSale();

});






// bottom
