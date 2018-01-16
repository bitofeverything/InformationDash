import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';


class Traffic extends Component{
  render(){
    return (
      <Card className="component">
        <CardContent>
          <Typography type="title" align="center">
            Traffic Alerts
          </Typography>
          <Typography type="body1" align="left">
            http://wiki.open311.org/GeoReport_v2/
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Traffic;
