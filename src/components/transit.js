import React, {Component} from 'react';
import {Card, Typography, CardContent} from 'material-ui-next';
import TransitCard from './transitCard';

const rootStyles = {
  background: '#F06060'
}

class Transit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'routes': this.props.transit.routes,
      'timeSinceUpdate': 0
    };
  }

  componentWillMount() {

    this.state.routes.forEach(route => {
      fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=${route.number}&s=${route.stop}`).then((resp) => resp.json()).then((json) => {
        route.predictions = json.predictions
        this.setState({
          routes: {
            ...this.state.routes
          }
        });
      });
    })

    this.nextBuses = setInterval(() => {

    Object.keys(this.state.routes).forEach(r => {
      const route = this.state.routes[r]
      fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=${route.number}&s=${route.stop}`).then((resp) => resp.json()).then((json) => {
        route.predictions = json.predictions
        this.setState({
          routes: {
            ...this.state.routes
          },
          timeSinceUpdate: 0
        });
      });
    });
  }, 30000);

    this.updateClock = setInterval(() => {
      this.setState({
        'timeSinceUpdate': this.state.timeSinceUpdate + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.nextBuses);
    clearInterval(this.updateClock);
  }

  renderTransitCards() {}

  render() {
    const {routes} = this.state

    return (<Card style={rootStyles} className='component bus-card'>
      <CardContent className="">
        <Typography type="display1" align="center">
          Next Buses
        </Typography>
        {Object.keys(routes).map(route => (
          <TransitCard
            key={routes[route].number + "-" + routes[route].stop}
            timeSinceUpdate={this.state.timeSinceUpdate}
            {...routes[route]}/>)
          )
        }
      </CardContent>
    </Card>)
  }
}

export default Transit;
