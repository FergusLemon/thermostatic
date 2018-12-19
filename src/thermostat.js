'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINTEMP = 10;
  this.MAXTEMP = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.getMinTemp = function() {
  return this.MINTEMP;
};

Thermostat.prototype.getMaxTemp = function() {
  return this.MAXTEMP;
};

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.getTemperature() > this.getMinTemp()) this.temperature--;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
  this.MAXTEMP = 32;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
  this.MAXTEMP = 25;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.getTemperature() < 18) return "Low Usage";
  if (this.getTemperature() < 25) return "Medium Usage";
  return "High Usage";
};
