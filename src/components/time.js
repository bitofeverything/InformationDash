import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';
import dateFormat from 'dateformat';

class Time extends Component{
  constructor(props){
    super(props);
    this.state = {
      'date': new Date()
    };
  }

  componentDidMount(){
    this.clocks = setInterval(()=>{
      this.setState({date:new Date()})
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clocks);
  }

  render(){
    const time = this.state.date;
    return (
      <Card  className='component'>
        <CardContent>
          <Typography type="headline" align="center">
            {dateFormat(time, "h:MM TT")}
          </Typography>
          <Typography type="body1" align="center">
            {dateFormat(time, "mmmm dd, yyyy")}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Time;
