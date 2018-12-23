$( document ).ready(function() {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      q: "London",
      APPID: "b92909448c873c8bd5e4fc7e15de3b6a",
    },
    type: "GET",
    dataType: "json",
  })

  .done(function(json) {
    $( "#location-name" ).text(json.name);
    $( "#location-weather" ).text(json.weather[0].main);
    $( "#location-temp" ).text(json.main.temp);
  })

  .fail(function(xhr, status, errorThrown) {
    alert( "There was a problem getting the weather data" );
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  });
});
