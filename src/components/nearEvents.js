import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';
import data from '../testData.json'
import EventInfo from './eventInfo'

class NearEvents extends Component{

  constructor(props){
    super(props)
    // this.state = {events:[], showModal:false, selectedEvent:{}}
    this.state = {events:data, showModal:false, selectedEvent:{}}
  }

  componentWillMount(){
    // const evtData = fetch('https://cors-anywhere.herokuapp.com/http://app.toronto.ca/cc_sr_v1_app/data/edc_eventcal_APR?limit=20');
    // evtData.then(resp => {
    //   return resp.json()
    // })
    // .then(jbody => {
    //   this.setState({events:jbody})
    // })
    // .catch(e => console.error(e))
  }

  eventClick(event){
    this.setState({selectedEvent:event})

  }

  renderEvents(events){
    if(events.length > 0){
      return events.slice(0,5).map(event => (
        <Typography
          onClick={() => this.eventClick(event.calEvent)}
          key={event.calEvent.recId}
          type="body1"
          align="center">
            {event.calEvent.eventName.replace('&amp;','&')}
        </Typography>)
      )

    }else{
      return "No events have been collected yet"
    }
  }

  render(){
    let visibility = this.state.showModal?'visible':'hidden'
    return (
      <Card  className='component'>
        <div className='modal' style={{visibility:visibility}}>
          <Card elevation={5}><EventInfo calEvent={this.state.selectedEvent}/></Card>
        </div>
        <CardContent>
          <Typography type="title" align="center">
            Nearby Events
          </Typography>
            { this.renderEvents(this.state.events) }
        </CardContent>
      </Card>
    )
  }
}

export default NearEvents;
