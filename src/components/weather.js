import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';


class Weather extends Component{
  render(){
    return (
      <Card  className='component'>
        <CardContent>
          <Typography type="title">
            Current Weather
          </Typography>
          <Typography type="display1" align="center">
            7<sup>o</sup>
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Weather;
