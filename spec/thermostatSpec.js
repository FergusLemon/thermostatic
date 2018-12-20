'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("starts at 20 degrees celsius", function() {
      expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMP);
    });
  });

  describe("Minimum temperature", function() {
    it("is 10 degrees celsius", function() {
      expect(thermostat.getMinTemp()).toEqual(thermostat.MIN_TEMP);
    });
  });

  describe("Maximum temperature", function() {
    it("is 25 degrees celsius when power saving mode is on", function() {
      expect(thermostat.getMaxTemp()).toEqual(thermostat.PSM_ON_MAX_TEMP);
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.getMaxTemp()).toEqual(thermostat.PSM_ON_MAX_TEMP);
    });
    it("is 32 degrees celsius when power saving mode is off", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.getMaxTemp()).toEqual(thermostat.PSM_OFF_MAX_TEMP);
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
    it("reduces the temperature to the maximum if necessary when switched on", function() {
      thermostat.powerSavingModeOff();
      var times = 10;
      for(var i=0; i < times; i++) {
        thermostat.up();
      };
      thermostat.powerSavingModeOn();
      expect(thermostat.getTemperature()).toEqual(thermostat.PSM_ON_MAX_TEMP);
    });
  });

  describe("Up", function() {
    it("increases the temperature by 1 degree celsius", function() {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });
    it("does not increase the temperature past the maximum when power saving mode is on", function() {
      var times = 6;
      for(var i=0; i < times; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toEqual(thermostat.PSM_ON_MAX_TEMP);
    });
    it("does not increase the temperature past the maximum when power saving mode is off", function() {
      thermostat.powerSavingModeOff();
      var times = 13;
      for(var i=0; i < times; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toEqual(thermostat.PSM_OFF_MAX_TEMP);
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
      expect(thermostat.getTemperature()).toEqual(thermostat.MIN_TEMP);
    });
  });

  describe("Reset", function() {
    it("changes the temperature back to 20 degrees celcius", function() {
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMP);
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
      spyOn(thermostat, 'getTemperature').and.returnValue(thermostat.PSM_ON_MAX_TEMP);
      expect(thermostat.energyUsage()).toEqual("High Usage");
    });
  });
});
