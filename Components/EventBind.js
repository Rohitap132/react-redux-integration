import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello!'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandle(){
        this.setState({
            message:'clicked1'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>changeMessage</button> */}
        <button onClick={()=>{this.clickHandle()}}>changeMessage</button>

      </div>
    )
  }
}
