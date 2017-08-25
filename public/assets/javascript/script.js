console.log("letsago");

var queryURL = "https://market-pro-2017.herokuapp.com/api/sales";

    $.ajax({
      url: queryURL,
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      success: function() { alert("Success"); },
      error: function(error) {
         alert('Failed!');
         console.log(error); 
       }
    })
    // .done(function(response) {
    //   console.log(response);
    // });
