function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.minTemp) this.temperature--;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
  this.maxTemp = 32;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
