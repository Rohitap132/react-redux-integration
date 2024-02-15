import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Username:'',
       Comments:''
    }
  }
  handleUsernameChange=(event)=>{
       this.setState({
        Username:event.target.value
       })
  }
  handleComments=(event)=>{
    this.setState({
      Comments:event.target.value
    })
  }
  submitValue=(event)=>{
    alert(`${this.state.Username} ,${this.state.Comments}`)
    event.preventDefault()
  }
  
  render() {
    return (
      <form onSubmit={this.submitValue}>
        <label>Username:</label>
        <input type='text' value={this.state.Username} onChange={this.handleUsernameChange}></input>
        <br/>
        <label>Comments</label>
        <textarea value={this.state.Comments} onChange={this.handleComments}></textarea>
        <button type="Submit">Submit</button>
      </form>
    )
  }
}
