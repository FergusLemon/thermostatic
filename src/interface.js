$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTempCheckUsage() {
    $("#temperature").text(thermostat.getTemperature());
    $("body").attr("class", thermostat.energyUsage());
  };

  updateTempCheckUsage();

  $("#increase-temp").click(function() {
    thermostat.up();
    updateTempCheckUsage();
  });

  $("#decrease-temp").click(function() {
    thermostat.down();
    updateTempCheckUsage();
  });

  $("#reset-temp").click(function() {
    thermostat.reset();
    updateTempCheckUsage();
  });

  $("#psm-switch").click(function() {
    if (thermostat.isPowerSavingModeOn()) {
      thermostat.powerSavingModeOff();
      $("#psm-text").text("Power Saving Off");
    } else {
      thermostat.powerSavingModeOn();
      $("#psm-text").text("Power Saving On");
    }
    updateTempCheckUsage();
  });
});
