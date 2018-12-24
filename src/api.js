$(document).ready(function() {
  function showWeather(city) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        q: city,
        APPID: "26b72921738cc30b7dcb2918e78a4d11",
        units: "metric",
      },
      type: "GET",
      dataType: "json",
    })

    .done(function(json) {
      $("#location-name").text(json.name);
      $("#location-weather").text(json.weather[0].main);
      $("#location-temp").text(json.main.temp + " C");
    })

    .fail(function(xhr, status, errorThrown) {
      alert("There was a problem getting the weather data, please check the spelling on the city you are trying to get weather information for.");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    });
  };

  $("#get-weather").click(function(event) {
    event.preventDefault();
    var city = $("#enter-city").val();
    showWeather(city);
    $("#enter-city").val('');
  });
});
