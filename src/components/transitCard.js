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

  renderPredictions() {
    const {timeSinceUpdate, predictions} = this.props;
    // console.log(predictions.direction)
    // console.log(? "yes":"no" )
    const directions = {
      "prediction": []
    }
    if (Array.isArray(predictions.direction)) {

      predictions.direction.forEach(e => directions.prediction.push(...e.prediction))


    } else {
      directions.prediction = predictions.direction.prediction
    }

    // const directionCollapse = predictions.direction.length>1?:predictions.direction
    // console.log(directionCollapse)
    const callLen = directions.prediction
      ? directions.prediction.length
      : 0
    //
    // const predict = callLen>1?directionCollapse.prediction:[directionCollapse.prediction]
    //

    // console.log(typeof directions.prediction)
    // console.log(typeof directions.prediction === 'object')
    // console.log(directions.prediction)

    if (Array.isArray(directions.prediction)) {

      return directions.prediction.filter((item) => {
        const seconds = parseInt(item.seconds, 0) - timeSinceUpdate;

        return seconds > 0
      }).slice(0, 3).map((info, idx) => {
        const seconds = parseInt(info.seconds, 0) - timeSinceUpdate;
        const presentation = timeFormat(seconds);

        return (<li key={idx}>{presentation}</li>)
      })
    } else if(typeof directions.prediction === 'object') {
      const seconds = parseInt( directions.prediction.seconds, 0) - timeSinceUpdate;
      const presentation = timeFormat(seconds);
      return (<li key={directions.prediction.stopTag}>{presentation}</li>)
    }
    else{
      return (<li key="NotRunning">No Predictions At This Time</li>)
    }
  }

  render(){
    const {timeSinceUpdate, predictions} = this.props;

    if(predictions){

    return (
        <Paper style={innerStyles} className='min-card'>
          <CardHeader style={headerStyle} title={predictions.routeTitle} />

          { !predictions ?'Loading':(
          <CardContent>
            <ul>
              {  predictions.direction ? this.renderPredictions():'No routes at this time'
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
