import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';
import config from '../config.json'
//import data from '../weather.json'

class Weather extends Component{
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
    loading: true,
    loaded: false,
    error: false
    }
    this.updateWeather = this.updateWeather.bind(this)
  }

  updateWeather() {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+ config.auth.darksky+ '/'+ config.weather.latitude +','+ config.weather.longitude +'?units=ca'
    console.log(url)
      fetch(url).then((r) => r.json())
                .then(
                  (j)=>{
                    this.setState({weather:j, loaded:true, loading:false, error:false})
                  })
                .catch(() => {
                  this.setState({error:true})
                });
    }

  componentWillMount(){

    this.weatherUpdate = setInterval(this.updateWeather()
    , 600000);

  }

  componentWillUnmount(){
    clearInterval(this.weatherUpdate)
  }

  render(){
    const {weather, loading, loaded} = this.state

    if(weather === null){
      return(
        <Card  className='component'>
          <CardContent>
            <Typography type="title">
              Weather Loading
            </Typography>
          </CardContent>
        </Card>
      )
    }
    else{
    return (
      <Card  className='component'>
        <CardContent>
          <Typography type="title">
            Current Weather
          </Typography>

	    { loading && !loaded ?
		    (<Typography type="display1" align="center">
		    	Loading
		    </Typography>)
		:
		    (<Typography type="display1" align="center">
            {Math.round(weather.currently.temperature)}<sup>o</sup>
          </Typography>)
	    }


        </CardContent>
      </Card>
    )
  }
  }
}

export default Weather;
