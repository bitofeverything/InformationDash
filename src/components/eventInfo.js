import React, {Component} from 'react';

class EventInfo extends Component{

  render(){
    const { calEvent } = this.props

    if(calEvent){
      return (<span>We have an event planned</span>)
    }
    return (
      <span>We don't have an event planned</span>
    )
  }

}

export default EventInfo;
