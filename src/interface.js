$( document ).ready(function() {
  var thermostat = new Thermostat();
  function updateTempCheckUsage() {
    $( "#temperature" ).text(thermostat.getTemperature());
    if (thermostat.getTemperature() < thermostat.LOW_TEMP) {
      $( "body" ).css("background-color", "#d9f2e6");
    } else if (thermostat.getTemperature() > thermostat.PSM_ON_MAX_TEMP) {
      $( "body" ).css("background-color", "#ffe6e6");
    } else {
      $( "body" ).css("background-color", "#f0f5f5");
    }
  };

  updateTempCheckUsage();

  $( "#increase-temp" ).click(function() {
    thermostat.up();
    updateTempCheckUsage();
  });

  $( "#decrease-temp" ).click(function() {
    thermostat.down();
    updateTempCheckUsage();
  });

  $( "#reset-temp" ).click(function() {
    thermostat.reset();
    updateTempCheckUsage();
  });

  $( "#psm-switch" ).click(function() {
    if (thermostat.isPowerSavingModeOn()) {
      thermostat.powerSavingModeOff();
      $( "#psm-text" ).text("Power Saving Off");
    } else {
      thermostat.powerSavingModeOn();
      $( "#psm-text" ).text("Power Saving On");
    }
    updateTempCheckUsage();
  });
});
