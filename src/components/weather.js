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
    loaded: false
    }
  }
  componentWillMount(){
     const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+ config.auth.darksky+ '/'+ config.weather.latitude +','+ config.weather.longitude +'?units=ca'
     console.log(url)
       fetch(url).then((r) => r.json()).then((j)=>{
	this.setState({weather:j, loaded:true, loading:false})
       });
     this.weatherUpdate = setInterval(() => {
       fetch(url).then((r) => r.json()).then((j)=>{
	this.setState({weather:j})
       });
     }, 600000);
  }

  componentWillUnmount(){
    clearInterval(this.weatherUpdate)
  }

  render(){
    const {weather, loading, loaded} = this.state

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

export default Weather;
