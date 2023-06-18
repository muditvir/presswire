import React, { Component } from 'react'
// import loading from './loding.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className="spinner-border" role="status">
        <span className="sr-only"></span>
        </div>
        {/* <img src={loading} alt="asdf" /> */}
      </div>
    )
  }
}
