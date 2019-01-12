import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';
import data from '../tasks.json'

const overflow = {

  "overflow":'hidden'
}

class TodoList extends Component{

  render(){
    const {tasks} = data
    return (
      <Card className='component'>
        <CardContent>
          <Typography type="title" align="center">
            ToDo List
          </Typography>
          <ul>
            {tasks.sort((a,b)=>(a.days>b.days)).slice(0,5).map(e=>{
              return(
              <li>{e.activity}</li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    )
  }
}

export default TodoList;
