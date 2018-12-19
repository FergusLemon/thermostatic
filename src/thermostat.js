'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.LOW_TEMP = 18;
  this.MAX_TEMP = 25;
  this.PSM_ON_MAX_TEMP = 25;
  this.PSM_OFF_MAX_TEMP = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.getMinTemp = function() {
  return this.MIN_TEMP;
};

Thermostat.prototype.getMaxTemp = function() {
  return this.MAX_TEMP;
};

Thermostat.prototype.up = function() {
  if (this.getTemperature() < this.MAX_TEMP) this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.getTemperature() > this.getMinTemp()) this.temperature--;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
  this.MAX_TEMP = this.PSM_OFF_MAX_TEMP;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
  this.MAX_TEMP = this.PSM_ON_MAX_TEMP;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.getTemperature() < this.LOW_TEMP) return "Low Usage";
  if (this.getTemperature() < this.PSM_ON_MAX_TEMP) return "Medium Usage";
  return "High Usage";
};
