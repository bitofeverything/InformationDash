# Information Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Simple flex webapp with swappable modules to display relevant information.

Targetting 800x480 resolution, displayed on a [sainsmart 7" display](https://www.sainsmart.com/products/7-tft-lcd-display-for-raspberry-pi-driver-board-bundle)

Information currently targets the City of Toronto.

### Current Modules

* Transit
* Events
* Time
* Todo List [WIP]
* Weather [WIP]
* Traffic Alerts [WIP, may be replaced]

### Configuration

Create a *config.json* file in the **src** folder. A sample file is provided.

For the transit module, you will need to identify which stop number you want predictions for and the bus route you're targetting.

So bus number would be something like 504 or 510, stop number should be present on the bus stop, or can be identified using NextBus, GTFS or any other transit data.

### Setup

* Run `yarn`
* Run `yarn start`
