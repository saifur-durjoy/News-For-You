import React, { Component } from 'react'
import loading from '../spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className="row">
          <img className='my-4' src={loading} alt='loading...'/>
          <strong>Loading..</strong>
        </div>        
      </div>
    )
  }
}

export default Spinner