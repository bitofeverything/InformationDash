import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';
import config from '../config.json'
import data from '../weather.json'

class Weather extends Component{
  constructor(props) {
    super(props);
    this.state = {
      weather: data
    }
  }
  componentWillMount(){
    // const url = 'https://api.darksky.net/forecast/'+ config.auth.darksky+ '/'+ config.weather.latitude +','+ config.weather.longitude +'?units=ca'
    // console.log(url)
    // this.weatherUpdate = setInterval(() => {
      // fetch(url).then((r) => r.json()).then((j)=>{

      // });
    // }, 600000);
  }

  componentWillUnmount(){
    clearInterval(this.weatherUpdate)
  }

  render(){
    const {weather} = this.state

    return (
      <Card  className='component'>
        <CardContent>
          <Typography type="title">
            Current Weather
          </Typography>
          <Typography type="display1" align="center">
            {Math.round(weather.currently.temperature)}<sup>o</sup>
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Weather;
