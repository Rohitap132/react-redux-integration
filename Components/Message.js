import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"welcome!"
      }
    }
    changeMessage(){
        // this.state.message = "Hello!"
        this.setState({
            message:"Hello!"
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
      </div>
    )
  }
}
