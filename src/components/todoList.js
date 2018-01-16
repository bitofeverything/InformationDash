import React, { Component } from 'react';
import { Card, Typography, CardContent } from 'material-ui-next';


class TodoList extends Component{
  render(){
    return (
      <Card  className='component'>
        <CardContent>
          <Typography type="title" align="center">
            ToDo List
          </Typography>
          <ul>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
          </ul>
        </CardContent>
      </Card>
    )
  }
}

export default TodoList;
