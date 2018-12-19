'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("starts at 20 degrees celsius", function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe("Minimum temperature", function() {
    it("is 10 degrees celsius", function() {
      expect(thermostat.getMinTemp()).toEqual(10);
    });
  });

  describe("Maximum temperature", function() {
    it("is 25 degrees celsius when power saving mode is on", function() {
      expect(thermostat.getMaxTemp()).toEqual(25);
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.getMaxTemp()).toEqual(25);
    });
    it("is 32 degrees celsius when power saving mode is off", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.getMaxTemp()).toEqual(32);
    });
  });

  describe("Power saving mode", function() {
    it("is on by default", function() {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
    it("can be switched off", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });
    it("can be switched on", function() {
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });

  describe("Up", function() {
    it("increases the temperature by 1 degree celsius", function() {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe("Down", function() {
    it("decreases the temperature by 1 degree celsius", function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });
    it("does not decrease the temperature below the minimum temperature", function() {
      var times = 11;
      for(var i=0; i < times; i++) {
        thermostat.down();
      };
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe("Reset", function() {
    it("changes the temperature back to 20 degrees celcius", function() {
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe("Energy usage", function() {
    it("is low if the temperature is below 18 degrees celcius", function() {
      spyOn(thermostat, 'getTemperature').and.returnValue(17);
      expect(thermostat.energyUsage()).toEqual("Low Usage");
    });
    it("is medium if the temperature is below 25 degrees celcius", function() {
      spyOn(thermostat, 'getTemperature').and.returnValue(24);
      expect(thermostat.energyUsage()).toEqual("Medium Usage");
    });
    it("is high if the temperature is 25 degrees celcius or above", function() {
      spyOn(thermostat, 'getTemperature').and.returnValue(25);
      expect(thermostat.energyUsage()).toEqual("High Usage");
    });
  });
});
