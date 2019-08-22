import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class NotFound extends Component {
  render () {
    const thePic = require('../Images/404.png');
    return(
        <div style={{padding: '50px', alignContent: 'center'}}>
            <div className="container">
                <h1 className="display-3">OOPS!</h1>
                <p>Sorry! Can't find that resource. Please check your URL.</p>
            </div>
            <div style={{width: '99%', marginLeft: 'auto', marginRight: 'auto'}}>
                <a href="https://www.starwars.com"><img src={thePic} width="100%" alt="The Github.com 404 page." /></a>
            </div>
            <br />
            <Button href='/'>Back to home</Button>
        </div>
    )
  }
}

export default NotFound