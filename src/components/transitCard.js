import React, {Component} from 'react'
import { Paper, CardContent, CardHeader } from 'material-ui-next';
import { timeFormat } from '../utils/timeFormat';


const headerStyle = {
  background: 'linear-gradient(to right, #F06060, #fff 100%) no-repeat',
  backgroundSize: '100% 5px',
  backgroundPosition: 'bottom'
}

const innerStyles = {
  marginTop:'3%'
}

class TransitCard extends Component{
  render(){

    const {timeSinceUpdate, predictions} = this.props;

    if(predictions){

    return (
        <Paper style={innerStyles} className='min-card'>
          <CardHeader style={headerStyle} title={predictions.routeTitle} />

          { !predictions ?'Loading':(
          <CardContent>
            <ul>
              {  predictions.direction ? 
		predictions.direction.prediction ?
		      predictions.direction.prediction.filter((item)=>{
                const seconds = parseInt(item.seconds, 0) - timeSinceUpdate;

                return seconds > 0
              }).slice(0,3).map((info, idx)=>{
                const seconds=parseInt(info.seconds, 0) - timeSinceUpdate;
                const presentation = timeFormat(seconds);

                return (<li key={idx}>{presentation}</li>)
              }):'No route predictions':'No routes at this time'
            }
            </ul>
          </CardContent>)}
        </Paper>

    )
  } else {
    return ("There is no predictions at this time")
  }

  }

}

export default TransitCard;
