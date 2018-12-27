# Thermostatic
A simpe web application that allows users to interact with a thermostat, turning the temperature up and down between 10°C and 32°C depending on whether Power Saving Mode is turned on or off. Users can also type the name of a city in a search box and retrieve local weather information for that city, this functionality is provided through the OpenWeatherMap.org API. This application was built as part of the Makers Academy course (week 5). The website is not being hosted on an external service so to use it a user has to run it locally on their own device, instructions for doing so are available below.  

### Installation

- [ ] **Step 1** - Clone this repository by copying the link available at the top of this webpage in the green button labelled 'Clone or Download'. 
- [ ] **Step 2** - Open up a Terminal window (Mac OS) and run `git clone <link>` where `<link>` is what you copied in the previous step.
```
>> git clone https://github.com/FergusLemon/thermostatic.git
```
- [ ] **Step 3** - `cd` into the cloned directory.
- [ ] **Step 4** - Run the command `open views/index.html` which will open a webpage in your default browser and display the thermostat as well as the current weather conditions in London (by default).  From there you can play with the functionality of the application.

### Tests
Unit tests can be located in the `spec` directory and can be run from the `thermostatic` directory using the command `open SpecRunner.html`.

### Technologies Used
Written in Javascript, JQuery, HTML and CSS.

Tests run using Jasmine.

[OpenWeatherMap.org's API](https://openweathermap.org/).

### License
MIT (c) 2018 Fergus Lemon

See `MIT.LICENSE` for more detail.
