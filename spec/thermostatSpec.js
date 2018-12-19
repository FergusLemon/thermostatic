'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("starts at 20 degrees celsius", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("Minimum temperature", function() {
    it("is 10 degrees celsius", function() {
      expect(thermostat.minTemp).toEqual(10);
    });
  });

  describe("Maximum temperature", function() {
    it("is 25 degrees celsius when power saving mode is on", function() {
      expect(thermostat.maxTemp).toEqual(25);
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.maxTemp).toEqual(25);
    });
    it("is 32 degrees celsius when power saving mode is off", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.maxTemp).toEqual(32);
    });
  });

  describe("Power saving mode", function() {
    it("is on by default", function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });
    it("can be switched off", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toEqual(false);
    });
    it("can be switched on", function() {
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });

  describe("Up", function() {
    it("increases the temperature by 1 degree celsius", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("Down", function() {
    it("decreases the temperature by 1 degree celsius", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
    it("does not decrease the temperature below the minimum temperature", function() {
      var times = 11;
      for(var i=0; i < times; i++) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe("Reset", function() {
    it("changes the temperature back to 20 degrees celcius", function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("Energy usage", function() {
    it("is low if the temperature is below 18 degrees celcius", function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual("Low Usage");
    });
    it("is medium if the temperature is below 25 degrees celcius", function() {
      thermostat.temperature = 24;
      expect(thermostat.energyUsage()).toEqual("Medium Usage");
    });
    it("is high if the temperature is 25 degrees celcius or above", function() {
      thermostat.temperature = 25;
      expect(thermostat.energyUsage()).toEqual("High Usage");
    });
  });
});
