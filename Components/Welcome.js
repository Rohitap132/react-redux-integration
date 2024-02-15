import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Welcome extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
      <h2>  Welcome!, {this.props.firstname} {this.props.lastName}</h2>
      </div>
    )
  }
  
}

export default Welcome

