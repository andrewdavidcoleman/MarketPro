console.log("letsago");

var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";

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
    });
