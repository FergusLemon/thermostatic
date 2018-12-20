$( document ).ready(function() {
  var thermostat = new Thermostat();
  $( "#temperature" ).text(thermostat.getTemperature());
  $( "#increase-temp" ).click(function() {
    thermostat.up();
    $( "#temperature" ).text(thermostat.getTemperature());
  });
  $( "#decrease-temp" ).click(function() {
    thermostat.down();
    $( "#temperature" ).text(thermostat.getTemperature());
  });
  $( "#reset-temp" ).click(function() {
    thermostat.reset();
    $( "#temperature" ).text(thermostat.getTemperature());
  });
  $( "#psm-switch" ).click(function() {
    thermostat.isPowerSavingModeOn() ? thermostat.powerSavingModeOff() : thermostat.powerSavingModeOn();
    $( "#temperature" ).text(thermostat.getTemperature());
  });
});
