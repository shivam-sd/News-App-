import React, { Component } from 'react'
import loader from './spinner.gif'

export default class spinner extends Component {
  render() {
    return (
      <div>
        <img src={loader} alt="" />
      </div>
    )
  }
}

